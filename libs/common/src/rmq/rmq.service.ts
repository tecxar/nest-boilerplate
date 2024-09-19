import { Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { AmqpConnectionManagerClass, Channel } from 'amqp-connection-manager';

// @Injectable()
export class RmqService {
	constructor(readonly configService: ConfigService) {}

	getOptions(queue: string, noAck = false, persistent = true): RmqOptions {
		return {
			transport: Transport.RMQ,
			options: {
				urls: [this.configService.get<string>('RABBIT_MQ_URI') ?? ''],
				queue: `${queue}_QUEUE`,
				noAck,
				persistent,
				queueOptions: {},
			},
		};
	}

	ack(context: RmqContext) {
		const channel = context.getChannelRef();
		const originalMessage = context.getMessage();
		channel.ack(originalMessage);
	}
}

// @Injectable()
export class RmqBroadCastService extends RmqService implements OnModuleInit, OnModuleDestroy {
	private readonly logger = new Logger(RmqBroadCastService.name);

	private connectionManager: AmqpConnectionManagerClass;
	private channel: Channel;

	constructor(readonly configService: ConfigService) {
		super(configService);
	}
	onModuleInit() {
		// Init AMQP Connection
		this.connectionManager = new AmqpConnectionManagerClass(this.configService.get<string>('RABBIT_MQ_URI'), {
			heartbeatIntervalInSeconds: 10,
			reconnectTimeInSeconds: 15,
		});
		this.connectMQ();
	}

	async onModuleDestroy() {
		await this.channel.close();
		await this.connectionManager.close();
	}

	/**
	 * Connect AMQP connection
	 */
	async connectMQ() {
		this.connectionManager
			.connect({ timeout: 5000 })
			.then(() => {
				this.logger.log('*************** Connected to MQ **********************');

				this.createChannel();
			})
			.catch((error: Error) => {
				this.logger.log(error);
			});
	}

	/**
	 * Create primary channel for publishing commands
	 */
	async createChannel() {
		this.connectionManager.createChannel({
			json: true,
			name: `broadcast`,
			setup: (channel: Channel) => {
				this.channel = channel;
				return new Promise(async resolve => {
					this.logger.log('*************** Com Channel Created **********************');

					/**
					 * After channel is initialized make sure to setup necessary
					 * 1. Create Queues for all active campaigns
					 * 2. Make default pre-fetch as 10
					 * 3. Assign runners to each queue (very important)
					 */

					await this.channel.prefetch(10);

					this.channel.assertExchange('broadcast-exch', 'fanout', { durable: true });

					resolve(true);
				});
			},
		});
	}
}

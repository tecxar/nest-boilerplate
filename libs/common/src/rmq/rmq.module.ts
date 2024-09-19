import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';
import { ApiConfigService } from 'src/config/api-config.service';
import { RMQModule, RMQService } from 'nestjs-rmq';

interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configService: ApiConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [configService.rmqURI || ''],
                queue: `${name}_QUEUE`,
                queueOptions: {
                  durable: true,
                },
                prefetchCount: 5,
              },
            }),
            inject: [ApiConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}

@Module({
  // providers: [RmqBroadCastService],
  exports: [RMQService],
})
export class RmqBroadCastModule extends RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqBroadCastModule,
      imports: [
        RMQModule.forRootAsync({
          imports: [],
          inject: [ApiConfigService],
          useFactory: (configService: ApiConfigService) => {
            return {
              exchangeName: configService.broadcastExch,
              assertExchangeType: 'fanout',
              connections: [configService.rmqConfig],
              queueName: name,
              prefetchCount: 10,
              queueOptions: {
                durable: true,
                exclusive: true,
              },
            };
          },
        }),
      ],
      exports: [RMQModule],
    };
  }
}

import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

// Define the options for the RMQ module
interface RmqModuleOptions {
  name: string;
  rmqUri: string;
}

@Module({
  providers: [RmqService],
  exports: [],
})
export class RmqModule {
  // Static method to register the RMQ module with dynamic options
  static register({ name, rmqUri }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: () => ({
              transport: Transport.RMQ,
              options: {
                urls: [rmqUri || ''],
                queue: `${name}_QUEUE`,
                queueOptions: {
                  durable: true,
                },
                prefetchCount: 1,
              },
            }),
          },
        ]),
      ],
      exports: [ClientsModule, RmqModule],
    };
  }
}

import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';
import { RmqModuleDefinition } from './rmq.module-definition';

// Define the options for the RMQ module
interface RmqModuleOptions {
  name: string;
  rmqUri: string;
}

@Module({
  providers: [RmqService],
  exports: [],
})
export class RmqModule extends RmqModuleDefinition.ConfigurableModuleClass {
  // Static method to register the RMQ module with dynamic options
  static forRoot({ name, rmqUri }: RmqModuleOptions): DynamicModule {
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

  static forRootAsync(
    options: typeof RmqModuleDefinition.ASYNC_OPTIONS_TYPE,
  ): DynamicModule {
    const module = super.forRootAsync(options);
    return {
      ...module,
      imports: [
        ...(options.imports || []),
        ClientsModule.registerAsync([
          {
            name:'',
            useFactory: async (...args) => {
              const rmqOptions = await options.useFactory!(...args);
  
              return {
                name:rmqOptions.name,
                transport: Transport.RMQ,
                options: {
                  urls: [rmqOptions.rmqUri || ''],
                  queue: `${name}_QUEUE`,
                  queueOptions: {
                    durable: true,
                  },
                  prefetchCount: 1,
                },
              }
            },
          }
        ]),
      ],
      exports: [RedisMQ],
      global: options.isGlobal,
    };
  }
  
}

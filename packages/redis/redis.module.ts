import { DynamicModule, Module } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModuleDefinition } from './redis.module-definition';

@Module({})
export class RedisMQ extends RedisModuleDefinition.ConfigurableModuleClass {
  static forRootAsync(
    options: typeof RedisModuleDefinition.ASYNC_OPTIONS_TYPE,
  ): DynamicModule {
    const module = super.forRootAsync(options);

    return {
      ...module,
      imports: [
        ...(options.imports || []),
        RedisModule.forRootAsync({
          inject: [ConfigService],
          imports: [ConfigModule],
          useFactory:async(...args)=> {

            const sequelizeOptions = await options.useFactory!(...args);
            
            return {
              readyLog: true,
              config: {
                url: sequelizeOptions.redisUri || '',
                showFriendlyErrorStack: true,
                enableOfflineQueue: true,
                maxRetriesPerRequest: null,
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                retryStrategy: function (_times) {
                  return 2000; // reconnect after 2 seconds
                },
              },
            };
          },
        }),
      ],
      exports: [RedisMQ],
      global: options.isGlobal,
    };
  }
}

import { ConfigurableModuleBuilder } from '@nestjs/common';
import { RedisModuleOptions } from './redis.module-interface';

export const RedisModuleDefinition =
  new ConfigurableModuleBuilder<RedisModuleOptions>()
    .setExtras(
      {
        isGlobal: true,
        key: '',
        redisUri: '',
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .setClassMethodName('forRoot')
    .build();

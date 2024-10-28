import { ConfigurableModuleBuilder } from '@nestjs/common';
import { RedisModuleOptions } from './rmq.module-interface';

export const RmqModuleDefinition =
  new ConfigurableModuleBuilder<RedisModuleOptions>()
    .setExtras(
      {
        isGlobal: true,
        key: '',
        rmqUri: '',
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .setClassMethodName('forRoot')
    .build();

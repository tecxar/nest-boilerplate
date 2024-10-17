import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DatabaseModuleOptions } from './database.module-interface';

export const DatabaseModuleDefinition =
  new ConfigurableModuleBuilder<DatabaseModuleOptions>()
    .setExtras(
      {
        isGlobal: true,
        key: '',
        models: [],
        config: {
          connection: {},
          replication: false,
        },
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal,
      }),
    )
    .setClassMethodName('forRoot')
    .build();

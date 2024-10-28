import { ConfigurableModuleBuilder } from '@nestjs/common';
import { RmqModuleOptions} from './rmq.module-interface';

export const RmqModuleDefinition =
  new ConfigurableModuleBuilder<RmqModuleOptions>()
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

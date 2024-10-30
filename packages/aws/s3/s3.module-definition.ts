import { ConfigurableModuleBuilder } from '@nestjs/common';
import { S3RegistrationOptions } from './s3.dto';

export const S3ModuleDefinition =
  new ConfigurableModuleBuilder<S3RegistrationOptions>()
    .setExtras(
      {
        config: {
          region: '',
          credentials: {
            accessKeyId: '',
            secretAccessKey: '',
          },
        },
        bucketName: '',
      },
      (definition, extras) => ({
        ...definition,
      }),
    )
    .setClassMethodName('forRoot')
    .build();

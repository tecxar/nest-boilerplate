import { DynamicModule, Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { AwsSdkModule } from 'aws-sdk-v3-nest';
import { S3Client } from '@aws-sdk/client-s3';
import { S3ModuleDefinition } from './s3.module-definition';
import { constants } from './s3.constants';

@Module({
  providers: [S3Service],
  exports: [S3Service],
})
export class S3Module extends S3ModuleDefinition.ConfigurableModuleClass {
  /**
   * To connect AWS S3 services
   * @typedef { Object } S3RegistrationOptions
   * @property { string } region - The AWS S3 region.
   * @typedef { Object } credentials
   * @property { string } accessKeyId - The AWS S3 Access Key Id.
   * @property {string} secretAccessKey - The AWS S3 Secret Access Key.
   */
  static forRoot(
    options: typeof S3ModuleDefinition.OPTIONS_TYPE,
  ): DynamicModule {
    return {
      module: S3Module,
      imports: [
        AwsSdkModule.register({
          client: new S3Client(options.config),
        }),
      ],
      exports: [AwsSdkModule],
    };
  }

  static forRootAsync(
    options: typeof S3ModuleDefinition.ASYNC_OPTIONS_TYPE,
  ): DynamicModule {
    return {
      module: S3Module,
      imports: [
        ...(options.imports || []),
        AwsSdkModule.registerAsync({
          clientType: S3Client as unknown as new (...args: any[]) => S3Client,
          useFactory: async (...args) => {
            const s3Options = await options.useFactory!(...args);
            const s3 = new S3Client(s3Options.config);
            try {
              console.log('Connected to S3');
            } catch (e) {
              console.log('Unable to connect to S3', e);
            }
            return s3;
          },
          inject: (options.inject as any) || [],
          imports: options.imports || [],
        }),
      ],
      providers: [
        {
          provide: constants.AWS.S3.BUCKET,
          useValue: options.bucketName,
        },
      ],
      exports: [AwsSdkModule],
    };
  }
}

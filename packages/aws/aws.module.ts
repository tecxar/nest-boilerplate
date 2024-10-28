import { DynamicModule, Module } from '@nestjs/common';
import { S3Service } from './s3/s3.service';
import { AwsSdkModule } from 'aws-sdk-v3-nest';
import { S3Client } from '@aws-sdk/client-s3';
import { S3RegistrationOptions } from './s3/s3.dto';
@Module({
  providers: [S3Service],
  exports: [S3Service],
})

/**
 * To connect AWS S3 services
 * @typedef { Object } S3RegistrationOptions
 * @property { string } region - The AWS S3 region.
 * @typedef { Object } credentials
 * @property { string } accessKeyId - The AWS S3 Access Key Id.
 * @property {string} secretAccessKey - The AWS S3 Secret Access Key.
 */
export class AwsModule {
  static register(option: S3RegistrationOptions): DynamicModule {
    return {
      module: AwsModule,
      imports: [
        AwsSdkModule.registerAsync({
          clientType: S3Client as unknown as new (...args: any[]) => S3Client,
          useFactory: async () => {
            const s3 = new S3Client(option);
            try {
              console.log('Connected to S3');
            } catch (e) {
              console.log('Unable to connect to S3', e);
            }
            return s3;
          },
        }),
      ],
      providers: [
        {
          provide: 'S3_BUCKET_NAME',
          useValue: option.bucketName,
        },
        {
          provide: 'PRE_SIGNED_URL_EXP_TIME',
          useValue: option?.expiryTime || 1800,
        },
      ],
      exports: [AwsSdkModule],
    };
  }
}

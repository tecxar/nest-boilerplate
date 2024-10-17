import { Module, DynamicModule } from '@nestjs/common';
import { S3Service } from './s3/s3.service';
import { S3ConfigOptDto } from './s3/s3.dto';

@Module({})
export class AwsModule {
  static register(options: S3ConfigOptDto): DynamicModule {
    return {
      module: AwsModule,
      providers: [
        {
          provide: 'S3_OPTIONS',
          useValue: options,
        },
        S3Service,
      ],
      exports: [S3Service],
    };
  }
}

import { Inject, Injectable } from '@nestjs/common';
import {
  S3ConfigOptDto,
  signedUrlDto,
  S3UploadDto,
  listFilesDto,
} from './s3.dto';
import { ApiResponse } from './s3.interface';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  S3ServiceException,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class S3Service {
  private s3Client: S3Client;
  constructor(@Inject('S3_OPTIONS') private options: S3ConfigOptDto) {
    this.s3Client = new S3Client({
      region: this.options.region,
      credentials: {
        accessKeyId: this.options.accessKeyId,
        secretAccessKey: this.options.secretAccessKey,
      },
    });
  }

  async uploadFile(request: S3UploadDto): Promise<ApiResponse> {
    try {
      const command = new PutObjectCommand({
        Bucket: request?.bucketName,
        Key: request?.fileKey,
        Body: request?.file?.buffer,
      });
      const result = await this.s3Client.send(command);
      return {
        success: true,
        message: 'File upload successfully!',
        result,
      };
    } catch (error) {
      if (
        error instanceof S3ServiceException &&
        error.name === 'EntityTooLarge'
      ) {
        return {
          success: false,
          message: `Error from S3 while uploading object to ${request.bucketName}. The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) or the multipart upload API (5TB max).`,
        };
      } else if (error instanceof S3ServiceException) {
        return {
          success: false,
          message: `Error from S3 while uploading object to ${request.bucketName}.  ${error.name}: ${error.message}`,
        };
      } else {
        throw error;
      }
    }
  }

  async writeUrl(request: signedUrlDto): Promise<ApiResponse> {
    try {
      const command = new PutObjectCommand({
        Bucket: request.bucketName,
        Key: request.fileKey,
      });
      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: 3600,
      });
      return {
        success: true,
        message: 'URL Generated successfully!',
        result: signedUrl,
      };
    } catch (error) {
      if (error instanceof Error && error.name === 'CredentialsProviderError') {
        return {
          success: true,
          message: `There was an error getting your credentials. Are your local credentials configured?\n${error.name}: ${error.message}`,
        };
      } else {
        throw error;
      }
    }
  }

  async readUrl(request: signedUrlDto): Promise<ApiResponse> {
    try {
      const command = new GetObjectCommand({
        Bucket: request.bucketName,
        Key: request.fileKey,
      });
      const signedUrl = await getSignedUrl(this.s3Client, command, {
        expiresIn: 3600,
      });
      return {
        success: true,
        message: 'URL Generated successfully!',
        result: signedUrl,
      };
    } catch (error) {
      if (error instanceof Error && error.name === 'CredentialsProviderError') {
        return {
          success: true,
          message: `There was an error getting your credentials. Are your local credentials configured?\n${error.name}: ${error.message}`,
        };
      } else {
        throw error;
      }
    }
  }

  async getFiles(request: listFilesDto): Promise<ApiResponse> {
    try {
      const params = {
        Bucket: request?.bucketName,
        Prefix: request?.folderName,
      };
      const command = new ListObjectsV2Command(params);
      const result = await this.s3Client.send(command);
      return {
        success: true,
        message: 'File listed successfully!',
        result,
      };
    } catch (error) {
      if (error instanceof Error && error.name === 'CredentialsProviderError') {
        return {
          success: true,
          message: `There was an error getting your credentials. Are your local credentials configured?\n${error.name}: ${error.message}`,
        };
      } else {
        throw error;
      }
    }
  }
}

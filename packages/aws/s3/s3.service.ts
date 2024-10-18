import { Injectable } from '@nestjs/common';
import { InjectAws } from 'aws-sdk-v3-nest';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
  S3ServiceException,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { listFilesDto, S3UploadDto, signedUrlDto } from './s3.dto';
import { ApiResponse } from './s3.interface';

@Injectable()
export class S3Service {
  constructor(
    @InjectAws(S3Client as unknown as new (...args: any[]) => S3Client)
    private readonly s3Client: S3Client,
  ) {}

  /**
   * To upload file on AWS S3
   * @param { S3UploadDto }
   */

  /**
   * To upload file on AWS S3
   * @param { string } bucketName - Provide AWS S3 buckate name.
   * @param { string } fileKey - Provide AWS S3 File Key
   * @param { File } file - Provide buffer file which you want to upload.
   * @return { ApiResponse }
   */
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

  /**
   * To generate presigned URL ( PUT URL ) to upload a file
   * @param { string } bucketName - Provide AWS S3 buckate name.
   * @param { string } fileKey - Provide AWS S3 File Key
   * @return { ApiResponse }
   */
  writeUrl(request: signedUrlDto): ApiResponse {
    try {
      const command = new PutObjectCommand({
        Bucket: request.bucketName,
        Key: request.fileKey,
      });
      const signedUrl = getSignedUrl(this.s3Client, command, {
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

  /**
   * To generate presigned URL ( GET URL ) to download a file
   * @param { string } bucketName - Provide AWS S3 buckate name.
   * @param { string } fileKey - Provide AWS S3 File Key
   * @return { ApiResponse }
   */
  readUrl(request: signedUrlDto): ApiResponse {
    try {
      const command = new GetObjectCommand({
        Bucket: request.bucketName,
        Key: request.fileKey,
      });
      const signedUrl = getSignedUrl(this.s3Client, command, {
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

  /**
   * Retrive Files From bucket
   * @param { string } bucketName - Provide AWS S3 buckate name.
   * @param { string } folderName - Provide AWS S3 folder name or prefix
   * @return { ApiResponse }
   */
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

import { Inject, Injectable } from '@nestjs/common';
import { InjectAws } from 'aws-sdk-v3-nest';
import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { signedUrlDto } from './s3.dto';
import { ApiResponse } from './s3.interface';
import { constants } from './s3.constants';

@Injectable()
export class S3Service {
  constructor(
    @InjectAws(S3Client as unknown as new (...args: any[]) => S3Client)
    private readonly s3Client: S3Client,
    @Inject(constants.AWS.S3.PROVIDER) private readonly bucketName: string,
  ) {}

  /**
   * To generate a presigned URL (PUT URL) to upload a file
   * @param {signedUrlDto} payload - Object containing AWS S3 file key and expiration time
   * @param {string} payload.fileKey - AWS S3 file key
   * @param {number} payload.expTime - Optional expiration time for the URL
   * @return {ApiResponse}
   */
  writeUrl(payload: signedUrlDto): Promise<ApiResponse> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: payload.fileKey,
    });
    return new Promise((resolve, reject) => {
      getSignedUrl(this.s3Client, command, {
        expiresIn: payload?.expTime || constants.AWS.S3.EXP_TIME,
      })
        .then(res => {
          const response = {
            success: true,
            message: 'URL Generated successfully!',
            result: res,
          };
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * To generate a presigned URL ( GET URL ) to upload a file
   * @param {signedUrlDto} payload - Object containing AWS S3 file key and expiration time
   * @param {string} payload.fileKey - AWS S3 file key
   * @param {number} payload.expTime - Optional expiration time for the URL
   * @return {ApiResponse}
   */
  readUrl(payload: signedUrlDto): Promise<ApiResponse> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: payload.fileKey,
    });
    return new Promise((resolve, reject) => {
      getSignedUrl(this.s3Client, command, {
        expiresIn: payload?.expTime || constants.AWS.S3.EXP_TIME,
      })
        .then(res => {
          const response = {
            success: true,
            message: 'URL Generated successfully!',
            result: res,
          };
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { InjectAws } from 'aws-sdk-v3-nest';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { listFilesDto, S3UploadDto, signedUrlDto } from './s3.dto';
import { ApiResponse } from './s3.interface';

@Injectable()
export class S3Service {
  constructor(
    @InjectAws(S3Client as unknown as new (...args: any[]) => S3Client)
    private readonly s3Client: S3Client,
    @Inject('S3_BUCKET_NAME') private readonly bucketName: string,
    @Inject('PRE_SIGNED_URL_EXP_TIME') private readonly expiryTime: number,
  ) {}

  /**
   * To upload file on AWS S3
   * @param { string } fileKey - Provide AWS S3 File Key
   * @param { File } file - Provide buffer file which you want to upload.
   * @return { ApiResponse }
   */
  uploadFile(request: S3UploadDto): Promise<ApiResponse> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: request?.fileKey,
      Body: request?.file?.buffer,
    });
    return new Promise((resolve, reject) => {
      this.s3Client
        .send(command)
        .then(res => {
          const response = {
            success: true,
            message: 'File upload successfully!',
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
   * To generate presigned URL ( PUT URL ) to upload a file
   * @param { string } fileKey - Provide AWS S3 File Key
   * @return { ApiResponse }
   */
  writeUrl(request: signedUrlDto): Promise<ApiResponse> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: request.fileKey,
    });
    return new Promise((resolve, reject) => {
      getSignedUrl(this.s3Client, command, {
        expiresIn: this.expiryTime,
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
   * To generate presigned URL ( GET URL ) to download a file
   * @param { string } fileKey - Provide AWS S3 File Key
   * @return { ApiResponse }
   */
  readUrl(request: signedUrlDto): Promise<ApiResponse> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: request.fileKey,
    });
    return new Promise((resolve, reject) => {
      getSignedUrl(this.s3Client, command, {
        expiresIn: this.expiryTime,
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
   * Retrive Files From bucket
   * @param { string } folderName - Provide AWS S3 folder name or prefix
   * @return { ApiResponse }
   */
  getFiles(request: listFilesDto): Promise<ApiResponse> {
    const command = new ListObjectsV2Command({
      Bucket: this.bucketName,
      Prefix: request?.folderName,
    });
    return new Promise((resolve, reject) => {
      this.s3Client
        .send(command)
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

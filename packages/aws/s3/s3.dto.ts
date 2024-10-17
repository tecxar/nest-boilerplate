export interface S3ConfigOptDto {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface S3UploadDto {
  bucketName: string;
  fileKey: string;
  file: any;
}

export interface signedUrlDto {
  bucketName: string;
  fileKey: string;
}

export interface listFilesDto {
  bucketName: string;
  folderName: string;
}

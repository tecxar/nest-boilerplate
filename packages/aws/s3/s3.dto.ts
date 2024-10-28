export interface S3RegistrationOptions {
  region: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  bucketName: string;
  expiryTime?: number;
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

export interface S3RegistrationOptions {
  config: {
    region: string;
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  };
  bucketName: string;
}

export interface signedUrlDto {
  fileKey: string;
  expTime?: number;
}

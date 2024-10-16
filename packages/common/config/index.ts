import { ClassConstructor, plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  validateSync,
} from 'class-validator';
import { Dialect } from 'sequelize';

export enum Environment {
  Development = 'development',
  Production = 'production',
}

export class EnvironmentVariables {
  @IsOptional()
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsOptional()
  @IsNumber()
  PORT: number;

  public get isProd(): boolean {
    return this.NODE_ENV === Environment.Production;
  }

  public get isDev(): boolean {
    return this.NODE_ENV === Environment.Development;
  }

  @IsString()
  RABBIT_MQ_URI: string;
}

export class DatabaseVariables extends EnvironmentVariables {
  @IsString()
  DB_HOST: string;

  @IsString()
  DB_REPLICA_HOST: string;

  @IsIn(['mysql', 'postgres', 'sqlite', 'mariadb', 'mssql'])
  DB_DIALECT: Dialect;

  @IsNumber()
  DB_PORT: number;

  @IsNumber()
  @IsOptional()
  DB_REPLICA_PORT: number;

  @IsString()
  DB_USER: string;

  @IsString()
  DB_REPLICA_USER: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_REPLICA_PASSWORD: string;

  @IsString()
  DB_NAME: string;

  @IsOptional()
  @IsNumber()
  DB_POOLMin: number;

  @IsOptional()
  @IsNumber()
  DB_POOLMax: number;

  @IsOptional()
  @IsBoolean()
  DB_LOGGING_ENABLED: boolean;

  @IsString()
  AWS_S3_REGION: string;

  @IsString()
  AWS_ACCESS_KEY_ID: string;

  @IsString()
  AWS_SECRET_ACCESS_KEY: string;

  @IsString()
  AWS_S3_BUCKET: string;

  @IsString()
  WEBHOOK_URL: string;

  @IsOptional()
  @IsString()
  CLIENT_WEBHOOK_URL: string;

  @IsString()
  CLEARDU_BACKEND_URL: string;
}

// export class EmailVariables extends EnvironmentVariables {
//   @IsString()
//   MAIL_USERNAME: string;

//   @IsString()
//   MAIL_PASSWORD: string;

//   @IsString()
//   MAIL_HOST: string;

//   @IsNumber()
//   MAIL_PORT: number;

//   @IsOptional()
//   @IsBoolean()
//   MAIL_SECURE: boolean;

//   @IsOptional()
//   @IsString()
//   MAIL_SERVICE: string;
// }

const getPlainToClass = <T>(
  type: ClassConstructor<T>,
  config: Record<string, unknown>,
) => plainToClass(type, config, { enableImplicitConversion: true });

export function validate(config: Record<string, unknown>): DatabaseVariables {
  try {
    const finalConfig = getPlainToClass(DatabaseVariables, config);
    const errors = validateSync(finalConfig, { skipMissingProperties: true });
    if (errors.length > 0) {
      console.log(errors, 'errors');

      throw new Error(errors.toString());
    }
    return finalConfig;
  } catch (error) {
    console.log(error);
  }
}

// export function emailValidate(config: Record<string, unknown>): EmailVariables {
//   try {
//     const finalConfig = getPlainToClass(EmailVariables, config);
//     const errors = validateSync(finalConfig, { skipMissingProperties: true });
//     if (errors.length > 0) {
//       throw new Error(errors.toString());
//     }
//     return finalConfig;
//   } catch (error) {
//     console.log(error);
//   }
// }

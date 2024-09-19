import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { ThrottlerOptions } from '@nestjs/throttler';
import { isNil } from 'lodash';
import { IRMQConnection } from 'nestjs-rmq';
import { RMQ_PROTOCOL } from 'nestjs-rmq/dist/constants';
import type { Units } from 'parse-duration';
import { default as parse } from 'parse-duration';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  public getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  private getDuration(key: string, format?: Units): number {
    const value = this.getString(key);
    const duration = parse(value, format);

    if (duration === undefined) {
      throw new Error(`${key} environment variable is not a valid duration`);
    }

    return duration;
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  private getString(key: string): string {
    const value = this.get(key);

    return value.replaceAll('\\n', '\n');
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get fallbackLanguage(): string {
    return this.getString('FALLBACK_LANGUAGE');
  }

  get throttlerConfigs(): ThrottlerOptions {
    return {
      ttl: this.getDuration('THROTTLER_TTL', 'second'),
      limit: this.getNumber('THROTTLER_LIMIT'),
      // storage: new ThrottlerStorageRedisService(new Redis(this.redis)),
    };
  }

  get redisURI(): string {
    return this.getString('REDIS_URI');
  }

  get rmqURI(): string {
    const isSecure = this.getBoolean('RABBIT_MQ_IS_SECURE');
    const config = this.rmqConfig;
    let connectionString = `${isSecure ? RMQ_PROTOCOL.AMQPS : RMQ_PROTOCOL.AMQP}`;

    if (config.password.length > 0) connectionString += `${config.login}:${config.password}@`;

    connectionString += `${config.host}:${config.port}`;

    return connectionString;
  }

  get rmqConfig(): IRMQConnection {
    const isSecure = this.getBoolean('RABBIT_MQ_IS_SECURE');
    return {
      host: this.getString('RABBIT_MQ_HOST'),
      port: this.getNumber('RABBIT_MQ_PORT'),
      login: this.getString('RABBIT_MQ_USER'),
      password: this.getString('RABBIT_MQ_PASSWD'),
      protocol: isSecure ? RMQ_PROTOCOL.AMQPS : RMQ_PROTOCOL.AMQP,
    };
  }

  get broadcastExch(): string {
    return this.getString('BROADCAST_EXCH');
  }

  // get postgresConfig(): TypeOrmModuleOptions {
  //   const entities = [
  //     __dirname + '/../../modules/**/*.entity{.ts,.js}',
  //     __dirname + '/../../modules/**/*.view-entity{.ts,.js}',
  //   ];
  //   const migrations = [__dirname + '/../../database/migrations/*{.ts,.js}'];

  //   return {
  //     entities,
  //     migrations,
  //     keepConnectionAlive: !this.isTest,
  //     dropSchema: this.isTest,
  //     type: 'postgres',
  //     name: 'default',
  //     host: this.getString('DB_HOST'),
  //     port: this.getNumber('DB_PORT'),
  //     username: this.getString('DB_USERNAME'),
  //     password: this.getString('DB_PASSWORD'),
  //     database: this.getString('DB_DATABASE'),
  //     subscribers: [UserSubscriber],
  //     migrationsRun: true,
  //     logging: this.getBoolean('ENABLE_ORM_LOGS'),
  //     namingStrategy: new SnakeNamingStrategy(),
  //   };
  // }

  get awsS3Config() {
    return {
      bucketRegion: this.getString('AWS_S3_BUCKET_REGION'),
      bucketApiVersion: this.getString('AWS_S3_API_VERSION'),
      bucketName: this.getString('AWS_S3_BUCKET_NAME'),
    };
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('ENABLE_DOCUMENTATION');
  }

  get microserviceEnabled(): boolean {
    return this.getBoolean('NATS_ENABLED');
  }

  get natsConfig() {
    return {
      host: this.getString('NATS_HOST'),
      port: this.getNumber('NATS_PORT'),
    };
  }

  get authConfig() {
    return {
      privateKey: this.getString('JWT_PRIVATE_KEY'),
      publicKey: this.getString('JWT_PUBLIC_KEY'),
      jwtExpirationTime: this.getNumber('JWT_EXPIRATION_TIME'),
    };
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }

  private get(key: string): string {
    const value = this.configService.get<string>(key);

    if (isNil(value)) {
      throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
    }

    return value;
  }
}

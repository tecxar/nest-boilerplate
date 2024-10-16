import { IConfig } from '@cleardu/interfaces';
import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ModelCtor } from 'sequelize-typescript';

interface DatabaseModuleOptions {
  models: string[] | ModelCtor[];
  config: IConfig;
}

@Module({
  imports: [],
  exports: [SequelizeModule],
})
export class DatabaseModule {
  static register({ models, config }: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        SequelizeModule.forRootAsync({
          useFactory: () => ({
            dialect: config.DB_DIALECT ?? 'mysql',
            synchronize: true,
            autoLoadModels: true,
            models,
            logging: (msg: string) => {
              // console.log(msg); // Customize logging as needed
            },
            replication: {
              read: [
                {
                  host: config.DB_HOST,
                  port: config.DB_PORT ?? 3306,
                  username: config.DB_USER ?? '',
                  password: config.DB_PASSWORD ?? '',
                  database: config.DB_NAME ?? '',
                },
              ],
              write: {
                host: config.DB_HOST,
                port: config.DB_PORT ?? 3306,
                username: config.DB_USER ?? '',
                password: config.DB_PASSWORD ?? '',
                database: config.DB_NAME ?? '',
              },
            },
          }),
          inject: [],
        }),
      ],
      exports: [DatabaseModule, SequelizeModule],
    };
  }
}

import { IMigrationConfig } from '@cleardu/core/interfaces';
import { DynamicModule, Module } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { MigrationConfigService } from './migration.service';

interface DatabaseModuleOptions {
  config: IMigrationConfig;
}

@Module({
  controllers: [],
})
export class MigrationModule {
  static register({ config }: DatabaseModuleOptions): DynamicModule {
    return {
      module: MigrationModule,
      providers: [
        {
          provide: MigrationConfigService,
          useFactory: async (sequelize: Sequelize) => {
            return new MigrationConfigService(sequelize, config);
          },
          inject: [Sequelize],
        },
      ],
      exports: [MigrationModule],
    };
  }
}

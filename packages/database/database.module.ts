import { type DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModuleDefinition } from './database.module-definition';

@Module({})
export class DatabaseModule extends DatabaseModuleDefinition.ConfigurableModuleClass {
  static forRoot(
    options: typeof DatabaseModuleDefinition.OPTIONS_TYPE,
  ): DynamicModule {
    const module = super.forRoot(options);
    return {
      ...module,
      imports: [
        SequelizeModule.forRoot({
          ...options.config.connection,
          name: options.key,
          synchronize: false,
          autoLoadModels: true,
          models: options.models,
          replication: options.config.replication,
        }),
      ],
      exports: [SequelizeModule],
      global: options.isGlobal,
    };
  }

  static forRootAsync(
    options: typeof DatabaseModuleDefinition.ASYNC_OPTIONS_TYPE,
  ): DynamicModule {
    const module = super.forRootAsync(options);

    return {
      ...module,
      imports: [
        ...(options.imports || []),
        SequelizeModule.forRootAsync({
          useFactory: async (...args) => {
            // Here you would typically resolve options asynchronously
            const sequelizeOptions = await options.useFactory!(...args);
            return {
              ...sequelizeOptions.config.connection,
              name: sequelizeOptions.key,
              synchronize: true,
              autoLoadModels: true,
              models: sequelizeOptions.models,
              replication: sequelizeOptions.config.replication,
            };
          },
          inject: options.inject || [],
          imports: options.imports || [],
        }),
      ],
      exports: [SequelizeModule],
      global: options.isGlobal,
    };
  }
}

import { type DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigurableModuleClass, ASYNC_OPTIONS_TYPE, OPTIONS_TYPE } from './database.module-definition';

@Module({})
export class DatabaseModule extends ConfigurableModuleClass {
	static forRoot(options: typeof OPTIONS_TYPE): DynamicModule {
		const module = super.forRoot(options);
		return {
			...module,
			imports: [
				SequelizeModule.forRoot({
					...options.config.connection,
					name: options.key,
					synchronize: true,
					autoLoadModels: true,
					models: options.models,
					replication: options.config.replication,
				}),
			],
			exports: [DatabaseModule, SequelizeModule],
			global: options.isGlobal,
		};
	}

	static forRootAsync(options: typeof ASYNC_OPTIONS_TYPE): DynamicModule {
		const module = super.forRootAsync(options);

		return {
			...module,
			imports: [
				SequelizeModule.forRoot({
					...options.config?.connection,
					name: options.key,
					synchronize: true,
					autoLoadModels: true,
					models: options.models,
					replication: options.config?.replication as any,
				}),
			],
			exports: [DatabaseModule, SequelizeModule],
			global: options.isGlobal,
		};
	}
}

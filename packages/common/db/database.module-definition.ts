import { ConfigurableModuleBuilder } from '@nestjs/common';
import { DatabaseModuleOptions } from './database.module-interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } =
	new ConfigurableModuleBuilder<DatabaseModuleOptions>()
		.setExtras(
			{
				isGlobal: true,
				key: '',
				models: [],
				config: {
					connection: {},
					replication: false,
				},
			},
			(definition, extras) => ({
				...definition,
				global: extras.isGlobal,
			}),
		)
		.setClassMethodName('forRoot')
		.build();

import { ModelCtor } from 'sequelize-typescript';
import { IConfig } from '@cleardu/interfaces';

export interface DatabaseModuleOptions {
	isGlobal?: boolean;
	key?: string;
	models: string[] | ModelCtor[];
	config: IConfig;
}

export * from './baseObject'
export * from './break'
export * from './cities'
export * from './states'
export * from './clientStates'
export * from './clients'
export * from './modules'
export * from './permissions'
export * from './role';

import {
  ConnectionOptions,
  Dialect,
  ReplicationOptions,
} from 'sequelize/types';

export interface DBConnection extends ConnectionOptions {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  dialect: Dialect;
  migration?: {};
}

export interface DBConnection extends ConnectionOptions {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface IConfig {
  connection: DBConnection;
  replication?: ReplicationOptions | false;
}

export interface IMigrationConfig {
  isDev: boolean;
  dirPath: string;
}

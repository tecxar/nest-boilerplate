import { ConnectionOptions, ReplicationOptions } from 'sequelize/types';

export interface IConfig {
  connection : ConnectionOptions,
  replication?: ReplicationOptions | false;
}

export interface IMigrationConfig {
  isDev: boolean;
  dirPath: string;
}

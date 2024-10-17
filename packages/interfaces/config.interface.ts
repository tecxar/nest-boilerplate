import { ConnectionOptions, ReplicationOptions } from 'sequelize/types';

export interface DBConnection extends ConnectionOptions {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface IConfig {
  connection : DBConnection,
  replication?: ReplicationOptions | false;
}

export interface IMigrationConfig {
  isDev: boolean;
  dirPath: string;
}

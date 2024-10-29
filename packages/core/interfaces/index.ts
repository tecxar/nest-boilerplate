export * from './baseObject';
export * from './break';
export * from './cities';
export * from './states';
export * from './clientStates';
export * from './clients';
export * from './modules';
export * from './responseType';
export * from './permissions'
export * from './role';
export * from './userTasks';
export * from './userTaskCustomers';
export * from './users';
export * from './statsHourlyCall';
export * from './statsClientCall';
export * from './statsBorrowerLoan';
export * from './settlements';
export * from './settlementNotes';
export * from './settlementHistory';
export * from './portfolios';
export * from './payments';
export * from './merchants';
export * from './loginDetails';
export * from './loanHistory';
export * from './loans';
export * from './loanParticipants';
export * from './loanParticipantHistory';
export * from './loanGroups';
export * from './jobs';
export * from './docCategory';
export * from './dispoSubDispo';
export * from './dialers';
export * from './clientStates';
export * from './centers';
export * from './campaigns';
export * from './borrowersHistory';
export * from './borrowers';
export * from './borrowersDispositions';
export * from './idObject'












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

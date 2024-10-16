import { Dialect } from 'sequelize';

export interface IConfig {
  DB_DIALECT: Dialect;
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

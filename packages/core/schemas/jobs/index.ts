import { Optional, Sequelize } from 'sequelize';
import { Column, Table, DataType } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IJob } from '../../interfaces/jobProgress';

@Table({
  tableName: 'jobs',
})
export default class Jobs extends BaseModel<IJob> {
  @Column({ type: DataType.STRING, allowNull: false })
  public jobId: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public jobType: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public clientId: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public totalRecords: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public correctRecords: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public incorrectRecords: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public insertedCount: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: '',
  })
  public lastInsertedIndex: string | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public progressPercentage: number;

  @Column({
    type: DataType.ENUM('waiting', 'pending', 'completed', 'failed'),
    allowNull: false,
    defaultValue: 'waiting',
  })
  public status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public errorMsg: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public errorFileKey: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public fileKey: string | null;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    defaultValue: false,
  })
  public isPaused?: boolean;
}

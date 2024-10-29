import { Optional, Sequelize } from 'sequelize';
import { Column, Table, DataType } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IJob } from '../../interfaces/jobs';

@Table({
  tableName: 'jobs',
})
export default class Jobs extends BaseModel<IJob> {
  @Column({ type: DataType.STRING, allowNull: false })
  public type: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public clientId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  public totalRecords: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  public correctRecords: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  public incorrectRecords: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  public insertedCount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  })
  public lastInsertedIndex: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  public progressPercentage: number;

  @Column({
    type: DataType.ENUM(
      'waiting',
      'inprogress',
      'pending',
      'completed',
      'failed',
    ),
    allowNull: false,
    defaultValue: 'waiting',
  })
  public status: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  public errorMsg: string | null;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  public errorFileKey: string | null;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  public fileKey: string;
}

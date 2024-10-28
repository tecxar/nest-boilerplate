import { Optional, Sequelize } from 'sequelize';
import { Column, Table, DataType } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IJobProgress } from '../../interfaces/jobProgress';
import { nanoid } from 'nanoid';

@Table({
  tableName: 'jobs',
})
export default class Jobs extends BaseModel<IJobProgress> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: () => nanoid(),
  })
  public job_id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public job_type: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public client_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public total_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public correct_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public incorrect_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public inserted_count: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: '',
  })
  public last_inserted_record: string | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  public progress_percentage: number;

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
  public error_msg: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public error_file_key: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public file_key: string | null;
}

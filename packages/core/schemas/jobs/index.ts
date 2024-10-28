import { Column, Table, DataType } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IJobProgress } from '../../interfaces/jobs';

@Table({
  tableName: 'jobs',
})
export default class Jobs extends BaseModel<IJobProgress> {
  @Column({ type: DataType.STRING, allowNull: false })
  declare job_id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare job_type: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare client_id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare total_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare correct_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare incorrect_records: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare inserted_count: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: '',
  })
  declare last_inserted_record: string | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  declare progress_percentage: number;

  @Column({
    type: DataType.ENUM('waiting', 'pending', 'completed', 'failed'),
    allowNull: false,
    defaultValue: 'waiting',
  })
  declare status: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare error_msg: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare error_file_key: string | null;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare file_key: string | null;
}

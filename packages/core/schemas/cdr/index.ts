import {
  Column,
  Table,
  DataType,
  AllowNull,
  Default,
} from 'sequelize-typescript';
import { ICdr } from '../../interfaces/cdr';
import { Model } from 'sequelize';
import BaseModel from '../baseModel';

@Table({ tableName: 'cdr' })
export default class CdrSchema extends BaseModel<ICdr> implements ICdr {
  @AllowNull(false)
  @Column(DataType.BIGINT.UNSIGNED)
  number: number;

  @Column(DataType.STRING(50))
  userId: string;

  @Column(DataType.INTEGER.UNSIGNED)
  extension: number;

  @AllowNull(true)
  @Column(DataType.STRING(25))
  mode: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  status: string;

  @Column(DataType.DATEONLY)
  date: Date;

  @Column(DataType.INTEGER.UNSIGNED)
  hour: number;

  @Column(DataType.INTEGER.UNSIGNED)
  minute: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  duration: string;

  @AllowNull(true)
  @Column(DataType.TIME)
  queueDuration: string;

  @AllowNull(true)
  @Column(DataType.TIME)
  ringDuration: string;

  @AllowNull(true)
  @Column(DataType.TIME)
  wrapupTime: string;

  @Column(DataType.STRING(20))
  queueName: string;

  @Column(DataType.INTEGER.UNSIGNED)
  listId: string;

  @Column(DataType.STRING(25))
  did: string;

  @Column(DataType.STRING(50))
  leadId: string;

  @Column(DataType.STRING(50))
  loanNumber: string;

  @Column(DataType.STRING(50))
  referenceId: string;

  @Column(DataType.STRING(40))
  processName: string;

  @Column(DataType.STRING(200))
  recordingFileName: string;

  @AllowNull(true)
  @Default(false)
  @Column(DataType.BOOLEAN)
  isUnknown: boolean;

  @Column(DataType.INTEGER.UNSIGNED)
  customerId: number;

  @AllowNull(true)
  @Column(DataType.TEXT)
  customerName: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  startTime: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  endTime: string;

  @Default('Outbound')
  @Column(DataType.ENUM('Outbound', 'Inbound'))
  direction: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  talkDuration: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  comments: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  waitDuration: string;
}

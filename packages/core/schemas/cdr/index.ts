import {
  Column,
  Table,
  DataType,
  AllowNull,
  Default,
  AutoIncrement,
  PrimaryKey,
} from 'sequelize-typescript';
import { ICdr } from '../../interfaces/cdr';
import { Model, Sequelize } from 'sequelize';
import BaseModel from '../baseModel';

@Table({ tableName: 'cdr' })
export default class CdrSchema extends BaseModel<ICdr> implements ICdr {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @AllowNull(false)
  @Column(DataType.STRING(50))
  public mobile: string;

  @Column(DataType.STRING(50))
  public userId: string;

  @Column(DataType.INTEGER.UNSIGNED)
  public extension: number;

  @AllowNull(true)
  @Column(DataType.STRING(25))
  public mode: string;

  @AllowNull(true)
  @Column(DataType.STRING(255))
  public status: string;

  @Column(DataType.DATEONLY)
  public date: string;

  @Column(DataType.INTEGER.UNSIGNED)
  public hour: number;

  @Column(DataType.INTEGER.UNSIGNED)
  public minute: number;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  public duration: number;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  public queueDuration: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  public ringDuration: number;

  @Column(DataType.STRING(50))
  public loanNumber: string;

  @Column(DataType.STRING(50))
  public referenceId: string;

  @Column(DataType.STRING(40))
  public campaignName: string;

  @AllowNull(true)
  @Default(false)
  @Column(DataType.BOOLEAN)
  public isUnknown: boolean;

  @Column(DataType.INTEGER.UNSIGNED)
  public borrowerId: number;

  @AllowNull(true)
  @Column(DataType.TEXT)
  public borrowerName: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public startTime: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public endTime: string;

  @Default('Outbound')
  @Column(DataType.ENUM('Outbound', 'Inbound'))
  public direction: string;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  public talkDuration: number;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  public waitDuration: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  public createdAt: Date;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  public updatedAt: Date;
}

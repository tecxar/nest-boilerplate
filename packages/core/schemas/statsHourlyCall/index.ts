import { Column, DataType, Table } from 'sequelize-typescript';
import { IStatsHourlyCall } from '../../interfaces/statsHourlyCall';
import BaseModel from '../baseModel';

@Table({ tableName: 'stats_hourly_call' })
export default class StatsHourlyCall
  extends BaseModel<IStatsHourlyCall>
  implements IStatsHourlyCall
{
  @Column({ type: DataType.INTEGER, allowNull: false })
  public dayMonthYear: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public hourSlot: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundCounts: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundConnected: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundMissed: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundReattempted: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundReAttemptedConnected: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundUniqueMobile: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundPos: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundTos: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundUnknownCalls: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundCounts: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundConnected: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundMissed: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public outboundPos: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public outboundTos: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundUniqueMobile: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundBusy: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundOthers: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundNotAnswered: number;
}

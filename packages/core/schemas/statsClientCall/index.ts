import { Column, DataType, Table } from 'sequelize-typescript';
import { IStatsClientCall } from '../../interfaces/statsClientCall';
import BaseModel from '../baseModel';

@Table({ tableName: 'stats_client_call' })
export default class StatsClientCall
  extends BaseModel<IStatsClientCall>
  implements IStatsClientCall
{
  @Column({ type: DataType.INTEGER, allowNull: true })
  public id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public day_month_year: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public clientId: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  public clientName: string;

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

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundPtpCount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundPtpAmount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundPos: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundTos: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundUnknownCalls: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundLoanCount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundSettlementCount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public inboundSettlementAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundFollowupCount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public inboundCallBackCount: number;

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
  public outboundPtpCount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public outboundPtpAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundBusy: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundOthers: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundNotAnswered: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundLoanCount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundSettlementCount: number;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: true })
  public outboundSettlementAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundFollowupCount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public outboundCallBackCount: number;
}

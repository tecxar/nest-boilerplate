import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ISettlementHistory } from '../../interfaces/settlementHistory';
import Borrowers from '../borrowers';

@Table({ tableName: 'settlement_history' })
export default class SettlementHistory
  extends Model<ISettlementHistory>
  implements ISettlementHistory
{
  @ForeignKey(() => Borrowers)
  @Column({ type: DataType.BIGINT, allowNull: false })
  public borrowerId: number;
  @BelongsTo(() => Borrowers)
  settlementHistoryBorrower: Borrowers;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public settlementId: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  public loanNumber: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public createdByUserId: number;

  @Column({ type: DataType.STRING(150), allowNull: false })
  public createdByName: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public userRoleId: number;

  @Column({ type: DataType.STRING(50), allowNull: false })
  public userRole: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: false })
  public amount: number;

  @Column({ type: DataType.STRING(20), allowNull: false })
  public status: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public comment: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public remarks: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public waiverOnPos: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public recoveryOnPos: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public collectibleAmount: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public waiverOnCollectibleAmount: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public recoveryOnCollectibleAmount: number;

  @Column({ type: DataType.STRING(20), allowNull: true })
  public clientStatus: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public clientId: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  public docKey: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public docName: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public updatedByClientId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public createByClientId: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public suggestedAmount: number;
}

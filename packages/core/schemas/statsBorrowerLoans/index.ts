import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { IStatsBorrowerLoan } from '../../interfaces/statsBorrowerLoan';
import BaseModel from '../baseModel';
import Borrowers from '../borrowers';

@Table({ tableName: 'stats_borrower_loan' })
export default class StatsBorrowerLoans
  extends BaseModel<IStatsBorrowerLoan>
  implements IStatsBorrowerLoan
{
  @ForeignKey(() => Borrowers)
  @Column({ type: DataType.BIGINT, allowNull: false })
  public borrowerId: string;
  @BelongsTo(() => Borrowers)
  statsBorrower: Borrowers;

  @Column({ type: DataType.STRING(50), allowNull: false })
  public loanNumber: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public monthYear: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public ptpAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public raised: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public raisedAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public approved: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public approvedAmount: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public receivedAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public received: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public payments: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public paymentsAmount: number;
}

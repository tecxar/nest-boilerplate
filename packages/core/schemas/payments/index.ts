import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
import { IPayments } from '../../interfaces/payments';
import Borrowers from '../borrowers';

@Table({ tableName: 'payments' })
export default class Payments extends Model<IPayments> implements IPayments {
  @Column({ type: DataType.BIGINT, allowNull: false })
  public borrowerId: number;
  @BelongsTo(() => Borrowers)
  paymentBorrower: Borrowers;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public clientName: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  public loanNumber: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public transactionId: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public phone: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public email: string;

  @Column({ type: DataType.DECIMAL(13, 2), allowNull: false })
  public amount: number;

  @Column({ type: DataType.DATE, allowNull: true })
  public paymentDate: Date;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public paymentSource: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public paymentType: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public paymentStatus: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public status: string;

  @Column({ type: DataType.STRING(255), allowNull: true })
  public note: string;
}

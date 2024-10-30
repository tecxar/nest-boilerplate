import { BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import { IBorrowersDispositions } from '../../interfaces/borrowersDispositions';
import BaseModel from '../baseModel';
import Borrowers from '../borrowers';

@Table({ tableName: 'borrowers_dispostions' })
export default class BorrowersDispositions
  extends BaseModel<IBorrowersDispositions>
  implements IBorrowersDispositions
{
  @ForeignKey(() => Borrowers)
  @Column({ type: DataType.INTEGER, allowNull: false })
  public borrowerId: number;
  @BelongsTo(() => Borrowers)
  borrower: Borrowers;

  @Column({ type: DataType.STRING(50), allowNull: false })
  public loanNumber: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public dispositionId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public subDispositionId: number;

  @Column({ type: DataType.DATE, allowNull: true })
  public followUpDate: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  public ptpDate: Date;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public ptpAmount: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  public comments: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  public reminder: boolean;

  @Column({ type: DataType.DATE, allowNull: true })
  public reminderDate: Date;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public callRefNo: string;
}

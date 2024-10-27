import { Column, DataType, Table } from 'sequelize-typescript';
import { ILoanGroups } from '../../interfaces/loanGroups';
import BaseModel from '../baseModel';

@Table({ tableName: 'loan_groups' })
export default class LoanGroups extends BaseModel<ILoanGroups> implements ILoanGroups {
  @Column({ type: DataType.INTEGER, allowNull: true })
  public id: number;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public groupId: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public clientBorrowerId: string;

  @Column({ type: DataType.STRING(250), allowNull: true })
  public name: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public leaderId: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public pos: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public tos: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public loanCounts: number;


}

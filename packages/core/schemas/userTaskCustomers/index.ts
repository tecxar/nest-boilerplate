import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Table } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IUserTaskCustomers } from '../../interfaces/userTaskCustomers';
import UserTasks from '../userTasks';

@Table({ tableName: 'userTaskCustomers' })
export default class UserTaskCustomers extends BaseModel<IUserTaskCustomers> implements IUserTaskCustomers {
  @AllowNull(false)
  @Column(DataType.STRING(255))
  public name: string;

  @Column(DataType.STRING(30))
  public loanNumber: string;

  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  public customerId: number;

  @Column(DataType.BOOLEAN)
  public isAttended: boolean;

  @Column(DataType.BOOLEAN)
  public isPending: boolean;

  @AllowNull(false)
  @ForeignKey(() => UserTasks)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public taskId: number;
  @BelongsTo(() => UserTasks, 'taskId')
  public task: UserTasks;

  @Column(DataType.STRING(255))
  public disposition: string;

  @Column(DataType.STRING(255))
  public subDisposition: string;

  @Column(DataType.TEXT)
  public comments: string;

  @Column(DataType.STRING(255))
  public callRefNo: string;
}

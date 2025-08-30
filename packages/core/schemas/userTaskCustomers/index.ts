import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IUserTaskCustomers } from '../../interfaces/userTaskCustomers';
import UserTasks from '../userTasks';

@Table({ tableName: 'userTaskCustomers' })
export default class UserTaskCustomers
  extends BaseModel<IUserTaskCustomers>
  implements IUserTaskCustomers
{
  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare name: string;

  @Column(DataType.STRING(30))
  declare loanNumber: string;

  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  declare borrowerId: number;

  @Column(DataType.BOOLEAN)
  declare isAttended: boolean;

  @Column(DataType.BOOLEAN)
  declare isPending: boolean;

  @AllowNull(false)
  @ForeignKey(() => UserTasks)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare taskId: number;
  @BelongsTo(() => UserTasks, 'taskId')
  declare task: UserTasks;

  @Column(DataType.STRING(255))
  declare disposition: string;

  @Column(DataType.STRING(255))
  declare subDisposition: string;

  @Column(DataType.TEXT)
  declare comments: string;

  @Column(DataType.STRING(255))
  declare callRefNo: string;
}

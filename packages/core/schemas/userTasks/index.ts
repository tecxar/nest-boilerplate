import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { IUserTask } from '../../interfaces/userTasks';
import BaseModel from '../baseModel';
import User from '../users';
import UserTaskCustomers from '../userTaskCustomers';

@Table({ tableName: 'userTasks' })
export default class UserTasks
  extends BaseModel<IUserTask>
  implements IUserTask
{
  @AllowNull(false)
  @Column(DataType.TEXT)
  declare name: string;

  @Column(DataType.BOOLEAN)
  declare isStart: boolean;

  @Column(DataType.INTEGER)
  declare total: number;

  @HasMany(() => UserTaskCustomers, 'taskId')
  customers: UserTaskCustomers[];

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare userId: number;
  @BelongsTo(() => User)
  declare taskUser: User;
}

import { AllowNull, BelongsTo, Column, DataType, ForeignKey, HasMany, Table } from 'sequelize-typescript';
import { IUserTask } from '../../interfaces/userTasks';
import BaseModel from '../baseModel';
import User from '../users';
import UserTaskCustomers from '../userTaskCustomers';

@Table({ tableName: 'userTasks' })
export default class UserTasks extends BaseModel<IUserTask> implements IUserTask {
  @AllowNull(false)
  @Column(DataType.TEXT)
  public name: string;

  @Column(DataType.BOOLEAN)
  public isStart: boolean;

  @Column(DataType.INTEGER)
  public total: number;

  @HasMany(() => UserTaskCustomers, 'taskId')
  customers: UserTaskCustomers[];

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public userId: number;
  @BelongsTo(() => User)
  public taskUser: User;
}

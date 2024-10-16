import { Column, Table, DataType, AllowNull } from 'sequelize-typescript';
import BaseModel from './base.model';
import { IBreaks, IDemo } from '@cleardu/interfaces';

@Table({ tableName: 'demo' })
export default class Demo extends BaseModel<IDemo> implements IDemo {
  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TIME)
  breakTime: Date;
}

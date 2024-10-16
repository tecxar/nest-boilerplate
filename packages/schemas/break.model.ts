import { Column, Table, DataType, AllowNull } from 'sequelize-typescript';
import BaseModel from './base.model';
import { IBreaks } from '@cleardu/interfaces';

@Table({ tableName: 'breaks' })
export default class Breaks extends BaseModel<IBreaks> implements IBreaks {
  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TIME)
  breakTime: Date;
}

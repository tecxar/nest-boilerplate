import { Column, Table, DataType, AllowNull } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IBreak } from '../../interfaces';

@Table({ tableName: 'breaks' })
export default class Breaks extends BaseModel<IBreak> implements IBreak {
  @AllowNull(false)
  @Column(DataType.STRING(20))
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.TIME)
  breakTime: Date;
}

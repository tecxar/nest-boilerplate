import { AllowNull, Column, DataType, Table } from 'sequelize-typescript';
import { IDialers } from '../../interfaces/dialers';
import BaseModel from '../baseModel';

@Table({ tableName: 'dialers' })
export default class Dialers extends BaseModel<IDialers> implements IDialers {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  public name: string;

  @Column(DataType.BOOLEAN)
  public isActive: boolean;

}

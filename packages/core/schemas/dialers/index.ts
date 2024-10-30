import { AllowNull, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { IDialers } from '../../interfaces/dialers';
import BaseModel from '../baseModel';
import Campaigns from '../campaigns';

@Table({ tableName: 'dialers' })
export default class Dialers extends BaseModel<IDialers> implements IDialers {
  @AllowNull(false)
  @Column(DataType.STRING(100))
  declare name: string;

  @Column(DataType.BOOLEAN)
  declare isActive: boolean;

  @HasMany(() => Campaigns, 'dialerId')
  declare campaigns: Campaigns[];
}

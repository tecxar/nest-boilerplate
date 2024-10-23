import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { IMerchants } from '../../interfaces/merchants';
import BaseModel from '../baseModel';

@Table({
  tableName: 'merchants',
  indexes: [{ fields: ['mobile'], unique: true }],
})
export default class Merchants
  extends BaseModel<IMerchants>
  implements IMerchants
{
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  public name: string;

  @Column(DataType.STRING(100))
  public key: string;
}

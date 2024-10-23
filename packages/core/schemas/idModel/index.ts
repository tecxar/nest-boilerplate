
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';


export default class IdlModel<t>
  extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;
}


import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';


@Table({ timestamps: true, createdAt: 'createdAt', updatedAt: 'updatedAt' })
export default class IdlModel<t>
  extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;
}

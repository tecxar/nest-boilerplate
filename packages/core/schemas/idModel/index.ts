
import { UUIDV1 } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';

@Table({ createdAt: false, updatedAt: false })
export default class IdlModel<t>
  extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @Column({ type: DataType.UUID, defaultValue: UUIDV1 })
  public uuId: string
}

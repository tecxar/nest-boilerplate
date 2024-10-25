
import { UUIDV1 } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { nanoid } from 'nanoid';


@Table({ createdAt: false, updatedAt: false })
export default class IdlModel<t>
  extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @Column({
    type: DataType.STRING(32),
    defaultValue: () => nanoid(),
  })
  uid: string;
}

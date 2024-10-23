import { Optional, Sequelize, UUIDV1 } from 'sequelize';

import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Default,
  DataType,
} from 'sequelize-typescript';
import { nanoid } from 'nanoid';
import { DatabaseObject } from '../../interfaces';

export type DatabaseObjectCreationAttribute = Optional<DatabaseObject, 'id'>;

@Table({ timestamps: true, createdAt: 'createdAt', updatedAt: 'updatedAt' })
export default class BaseModel<t>
  extends Model
  implements DatabaseObjectCreationAttribute
{
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @Column({
    type: DataType.STRING(32),
    defaultValue: () => nanoid(),
  })
  uid: string;

  @Column({ type: DataType.INTEGER.UNSIGNED })
  public createdBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  public createdAt: Date;

  @Column(DataType.INTEGER.UNSIGNED)
  public updatedBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  public updatedAt: Date;
}

import { Optional, Sequelize, UUIDV1 } from 'sequelize';

import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Default,
  DataType,
  Index,
} from 'sequelize-typescript';
import { nanoid } from 'nanoid';
import { DatabaseObject } from '../../interfaces';

export type DatabaseObjectCreationAttribute = Optional<DatabaseObject, 'id'>;

@Table({
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  paranoid: true,
})
export default class BaseModel<t>
  extends Model
  implements DatabaseObjectCreationAttribute
{
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare id: number;

  @Column({
    type: DataType.STRING(32),
    defaultValue: () => nanoid(),
  })
  uId: string;

  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare createdBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare createdAt: Date;

  @Column(DataType.INTEGER.UNSIGNED)
  declare updatedBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare updatedAt: Date;

  @Column(DataType.DATE)
  declare deletedAt: Date;
}

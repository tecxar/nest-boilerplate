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
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { nanoid } from 'nanoid';
import { DatabaseObject } from '../../interfaces';
import User from '../users';

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
  @Column({ type: DataType.BIGINT })
  declare id: number;

  @Column({
    type: DataType.STRING(32),
    defaultValue: () => nanoid(),
  })
  uId: string;

  @Column({ type: DataType.BIGINT })
  declare createdBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare createdAt: Date;

  @Column(DataType.BIGINT)
  declare updatedBy: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare updatedAt: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  declare deletedAt: Date;
}


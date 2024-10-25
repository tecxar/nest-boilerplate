import { Sequelize } from 'sequelize';
import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import States from '../states';
import { ICities } from '../../interfaces/cities';

@Table({ tableName: 'cities' })
export default class Cities extends Model<ICities> implements ICities {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare id: number;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare createdAt: Date;

  @Default(Sequelize.literal('CURRENT_TIMESTAMP'))
  @Column(DataType.DATE)
  declare updatedAt: Date;

  @ForeignKey(() => States)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare stateId: number;
  @BelongsTo(() => States)
  state: States;

  @Column(DataType.STRING(150))
  name: string;
}

import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Model } from 'sequelize-typescript';
import { Sequelize } from 'sequelize';
import { IStates } from '../../interfaces/states';

@Table({ tableName: 'states' })
export default class States extends Model<IStates> implements IStates {
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

  @Column(DataType.STRING(150))
  name: string;

  @Column(DataType.STRING(50))
  stateCode: string;
}

import { Sequelize } from 'sequelize';
import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  HasOne,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { IClientStates } from '../../interfaces/clientStates';
import BaseModel from '../baseModel';
import Clients from '../clients';

@Table({ tableName: 'clientStates' })
export default class ClientStates
  extends BaseModel<IClientStates>
  implements IClientStates
{
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

  @Column(DataType.INTEGER.UNSIGNED)
  clientId: number;

  @HasOne(() => Clients, 'clientId')
  declare city: Clients;
}

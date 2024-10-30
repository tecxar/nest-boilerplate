import { Column, DataType, Table } from 'sequelize-typescript';
import { IPortfolios } from '../../interfaces/portfolios';
import BaseModel from '../baseModel';

@Table({ tableName: 'portfolios' })
export default class Portfolios
  extends BaseModel<IPortfolios>
  implements IPortfolios
{
  @Column({ type: DataType.STRING(150), allowNull: false })
  public name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public description: string;

  @Column({ type: DataType.BIGINT, allowNull: false })
  public isActive: boolean;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public clientId: number;
}

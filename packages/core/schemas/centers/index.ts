import { Column, DataType, Table } from 'sequelize-typescript';
import { ICenters } from '../../interfaces/centers';
import BaseModel from '../baseModel';

@Table({ tableName: 'centers' })
export default class Centers extends BaseModel<ICenters> implements ICenters {
  @Column({ type: DataType.STRING(255), allowNull: false })
  public name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public address: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public landmark: string;

  @Column({ type: DataType.BIGINT, allowNull: false })
  public cityId: number;

  @Column({ type: DataType.BIGINT, allowNull: false })
  public stateId: number;

  @Column({ type: DataType.BIGINT, allowNull: false })
  public zipcode: number;

  @Column({ type: DataType.SMALLINT, allowNull: false })
  public isActive: number;

  @Column({ type: DataType.STRING(20), allowNull: false })
  public centerCode: string;

  @Column({ type: DataType.STRING(15), allowNull: false })
  public phone: string;
}

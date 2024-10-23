import { Column, Table, DataType, AllowNull } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IRole } from '../../interfaces';

@Table({ tableName: 'roles' })
export default class Roles extends BaseModel<IRole> implements IRole {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  slug: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;
}

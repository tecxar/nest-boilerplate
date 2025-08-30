import { Column, DataType, Table } from 'sequelize-typescript';
import { IRole } from '../../interfaces';
import BaseModel from '../baseModel';

@Table({
  tableName: 'roles',
  paranoid: true,
})
export default class Roles extends BaseModel<IRole> implements IRole {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Column({ type: DataType.INTEGER.UNSIGNED })
  parentId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  slug: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  isActive: boolean;
}

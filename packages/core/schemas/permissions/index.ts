// import { PermissionDto } from '@/dtos/permissions.dto';
import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  Table
} from 'sequelize-typescript';
import { ActInactiveEnumType } from '../../constants';
import { IPermission } from '../../interfaces/permissions';
import IdlModel from '../idModel';


@Table({ tableName: 'permissions' })
export default class Permission extends IdlModel<IPermission> implements IPermission {
  @AllowNull(true)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public moduleId: number;

  @Column({ type: DataType.STRING })
  public title: string;

  @Column({ type: DataType.STRING })
  public slug: string;

  @Column({ type: DataType.STRING })
  public link: string;

  @Column({ type: DataType.TEXT })
  public description: string;

  @Column({ type: DataType.ENUM(ActInactiveEnumType.active, ActInactiveEnumType.inactive) })
  public status: ActInactiveEnumType;

  @Column({ type: DataType.BOOLEAN })
  public is_deleted: boolean;

  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  public isHead: boolean;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  public icon: string;

  @AllowNull(true)
  @ForeignKey(() => Permission)
  @Column({ type: DataType.INTEGER })
  public parentId: number;
}

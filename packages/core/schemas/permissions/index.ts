// import { PermissionDto } from '@/dtos/permissions.dto';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';
import { IPermission } from '../../interfaces/permissions';
import IdlModel from '../idModel';
import Modules from '../modules';

@Table({ tableName: 'permissions' })
export default class Permission
  extends IdlModel<IPermission>
  implements IPermission
{
  @ForeignKey(() => Modules)
  @AllowNull(true)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare moduleId: number;
  @BelongsTo(() => Modules)
  module: Modules;

  @Column({ type: DataType.STRING })
  declare title: string;

  @Column({ type: DataType.STRING })
  declare slug: string;

  @Column({ type: DataType.TEXT })
  declare description: string;
}

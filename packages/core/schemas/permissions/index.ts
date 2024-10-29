// import { PermissionDto } from '@/dtos/permissions.dto';
import { AllowNull, Column, DataType, Table } from 'sequelize-typescript';
import { IPermission } from '../../interfaces/permissions';
import IdlModel from '../idModel';

@Table({ tableName: 'permissions' })
export default class Permission
  extends IdlModel<IPermission>
  implements IPermission {
  @AllowNull(true)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare moduleId: number;

  @Column({ type: DataType.STRING })
  declare title: string;

  @Column({ type: DataType.STRING })
  declare slug: string;

  @Column({ type: DataType.TEXT })
  declare description: string;
}

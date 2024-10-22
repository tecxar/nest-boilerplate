import { Model } from 'sequelize';
import { AllowNull, AutoIncrement, Column, DataType, HasMany, PrimaryKey, Table } from 'sequelize-typescript';
import { IModule } from '../../interfaces/modules';
import Permission from '../permissions';

@Table({ tableName: 'modules' })
export default class Modules extends Model<IModule> implements IModule {

  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public id: number;

  @Column({ type: DataType.STRING })
  public title: string;

  @Column({ type: DataType.INTEGER })
  public position: number;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  icon: string;

  @HasMany(() => Permission, 'moduleId')
  declare modulePermissions: Permission;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  url: string;
}

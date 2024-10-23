import { AllowNull, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { IModule } from '../../interfaces/modules';
import IdlModel from '../idModel';
import Permission from '../permissions';

@Table({ tableName: 'modules' })
export default class Modules extends IdlModel<IModule> implements IModule {

  @Column({ type: DataType.STRING })
  public title: string;

  @Column({ type: DataType.INTEGER })
  public position: number;

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  icon: string;

  @HasMany(() => Permission, 'moduleId')
  declare permissions: Permission[];

  @AllowNull(true)
  @Column({ type: DataType.STRING })
  url: string;
}

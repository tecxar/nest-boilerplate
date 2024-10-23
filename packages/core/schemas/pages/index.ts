import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Table
} from 'sequelize-typescript';
import { ActInactiveEnumType } from '../../constants';
import { IPages } from '../../interfaces/pages';
import IdlModel from '../idModel';
import Permission from '../permissions';
@Table({ tableName: 'pages' })
export class Pages extends IdlModel<IPages> implements IPages {

  @AllowNull(true)
  @Column({ type: DataType.INTEGER.UNSIGNED })
  public moduleId: number;


  @Column({ type: DataType.STRING })
  public title: string;

  @Column({ type: DataType.INTEGER })
  public position: number;

  @Column({ type: DataType.STRING })
  public slug: string;

  @Column({ type: DataType.STRING })
  public link: string;

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

  @HasMany(() => Permission, 'pageId')
  public page: Permission[];

}

export default Pages;

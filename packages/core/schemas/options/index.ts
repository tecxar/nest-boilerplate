import {
  Column,
  Table,
  DataType,
  AllowNull,
  Default,
  Index,
} from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { IOptions } from '../../interfaces/options';

@Table({ tableName: 'options' })
export default class optionsSchema
  extends BaseModel<IOptions>
  implements IOptions
{
  @AllowNull(false)
  @Column(
    DataType.ENUM('Contacted', 'Not contacted', 'Contacted - Others', 'Legal'),
  )
  declare category: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  @Index('idx_name')
  declare name: string;

  @Column(DataType.STRING)
  declare isActive: boolean;

  @Column(DataType.INTEGER.UNSIGNED)
  declare parentId: number;

  @Column(DataType.ENUM('disposition', 'sub_disposition'))
  declare type: string;
}

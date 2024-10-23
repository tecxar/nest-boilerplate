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
  public category: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  @Index('idx_name')
  public name: string;

  @Column(DataType.STRING)
  public isActive: boolean;

  @Column(DataType.INTEGER.UNSIGNED)
  public parentId: number;

  @Column(DataType.ENUM('disposition', 'sub_disposition'))
  public type: string;
}

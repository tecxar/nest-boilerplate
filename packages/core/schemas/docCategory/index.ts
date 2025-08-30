import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Model } from 'sequelize-typescript';
import { IDocCategory } from '../../interfaces/docCategory';

@Table({ tableName: 'doc_category' })
export default class DocCategory
  extends Model<IDocCategory>
  implements IDocCategory
{
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED })
  declare id: number;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  declare name: string;

  @Column(DataType.STRING(100))
  declare key: string;
}

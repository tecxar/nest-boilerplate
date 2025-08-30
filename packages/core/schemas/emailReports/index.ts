import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { IEmailReport } from '../../interfaces/emailReports';

@Table({ tableName: 'email_reports' })
export default class EmailReports
  extends Model<IEmailReport>
  implements IEmailReport
{
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.BIGINT })
  declare id: number;

  @Column({ type: DataType.STRING(100), allowNull: false })
  declare module: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
  declare to: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: true })
  declare cc: string[];
}

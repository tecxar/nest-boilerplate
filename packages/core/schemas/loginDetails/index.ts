import { Column, DataType, Table } from 'sequelize-typescript';
import { ILoginDetails } from '../../interfaces/loginDetails';
import BaseModel from '../baseModel';

@Table({ tableName: 'login_details' })
export default class LoginDetails
  extends BaseModel<ILoginDetails>
  implements ILoginDetails
{
  @Column({ type: DataType.STRING(20), allowNull: false })
  public status: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  public duration: number;
}

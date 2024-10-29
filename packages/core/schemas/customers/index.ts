// models/customer.ts

import { Column, Table, DataType } from 'sequelize-typescript';
import BaseModel from '../baseModel';
import { ICustomers } from '../../interfaces/customer';

@Table({
  tableName: 'customers', // Define the table name
})
export default class Customer extends BaseModel<ICustomers> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true, // Assuming loanNumber is unique and primary key
  })
  public loanNumber: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public mailingState: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public customerName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public mobile: string;
}

import { Column, DataType, Table } from 'sequelize-typescript';
import { ILoanParticipants } from '../../interfaces/loanParticipants';
import BaseModel from '../baseModel';
import { ILoanParticipantHistory } from '../../interfaces/loanParticipantHistory';

@Table({ tableName: 'loan_participant_history' })
export default class LoanParticipantHistory extends BaseModel<ILoanParticipantHistory> implements ILoanParticipantHistory {

  @Column({ type: DataType.STRING(50), allowNull: true })
  public loanNumber: string;

  @Column({ type: DataType.BIGINT, allowNull: true })
  public borrowerId: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public loanId: number;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public participantType: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public pan: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public email: string;

  @Column({ type: DataType.STRING(255), allowNull: true })
  public name: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public mobile: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public aadharNumber: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public voterId: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public drivingLicense: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public motherName: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public fatherName: string;

  @Column({ type: DataType.DATE, allowNull: true })
  public dob: Date;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public passportNumber: string;

  @Column({ type: DataType.STRING(20), allowNull: true })
  public gender: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public maritalSatus: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public landmark: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public telephone: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public cityName: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public stateName: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public pincode: number;


}

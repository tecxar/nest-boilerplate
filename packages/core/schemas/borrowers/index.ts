import { Column, DataType, HasMany, HasOne, Table } from 'sequelize-typescript';
import { GenderTypeEnum } from '../../constants';
import { IBorrowers } from '../../interfaces/borrowers';
import BaseModel from '../baseModel';
import BorrowersDispositions from '../borrowersDispositions';
import LoanParticipantHistory from '../loanParticipantHistory';
import StatsBorrowerLoans from '../statsBorrowerLoans';
import Settlements from '../settlements';
import SettlementNotes from '../settlementNotes';
import SettlementHistory from '../settlementHistory';
import Payments from '../payments';
import LoanHistory from '../loansHistory';
import Loans from '../loans';
import LoanParticipants from '../loanParticipants';

@Table({ tableName: 'borrowers' })
export default class Borrowers
  extends BaseModel<IBorrowers>
  implements IBorrowers
{
  @Column({ type: DataType.STRING(100), allowNull: true })
  public name: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public fatherName: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public motherName: string;

  @Column({
    type: DataType.ENUM(GenderTypeEnum.male, GenderTypeEnum.female),
    allowNull: true,
  })
  public gender: GenderTypeEnum;

  @Column({ type: DataType.SMALLINT, allowNull: true })
  public age: number;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public email: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public pan: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public address: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public cityName: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public stateName: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public pincode: number;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public borrowerOccupation: string;

  @Column({ type: DataType.DECIMAL(13, 2), allowNull: true })
  public cibilScore: number;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public mobile: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  public isActive: boolean;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public voterId: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public drivingLicence: string;

  @Column({ type: DataType.DATE, allowNull: true })
  public dob: Date;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public maritalStatus: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public aadhar: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public communityReligion: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public passportNumber: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public employmentStatus: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public employmentType: string;

  @Column({ type: DataType.STRING(150), allowNull: true })
  public companyName: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public designation: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public clientBorrowerId: string;

  @HasMany(() => BorrowersDispositions, 'borrowerId')
  declare borrowerDisposition: BorrowersDispositions[];

  @HasMany(() => LoanParticipantHistory, 'borrowerId')
  declare loanParticipantHistory: LoanParticipantHistory[];

  @HasMany(() => StatsBorrowerLoans, 'borrowerId')
  declare statsBorrowerLoans: StatsBorrowerLoans[];

  @HasMany(() => Settlements, 'borrowerId')
  declare settlements: Settlements[];

  @HasMany(() => SettlementNotes, 'borrowerId')
  declare settlementNotes: SettlementNotes[];

  @HasMany(() => SettlementHistory, 'borrowerId')
  declare settlementHistory: SettlementHistory[];

  @HasMany(() => Payments, 'borrowerId')
  declare payments: Payments[];

  @HasMany(() => LoanHistory, 'borrowerId')
  declare loanHistory: LoanHistory[];

  @HasMany(() => Loans, 'borrowerId')
  declare loans: Loans[];

  @HasMany(() => LoanParticipants, 'borrowerId')
  declare loanParticipants: LoanParticipants[];
}

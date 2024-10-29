import { Column, DataType, Table } from 'sequelize-typescript';
import { ILoans } from '../../interfaces/loans';
import BaseModel from '../baseModel';

@Table({ tableName: 'loans' })
export default class Loans extends BaseModel<ILoans> implements ILoans {
  @Column({ type: DataType.INTEGER, allowNull: true })
  public id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public borrowerId: number;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  public isActive: boolean;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public clientId: number;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public loanNumber: string;

  @Column({ type: DataType.DATE, allowNull: true })
  public loanDate: Date;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public loanAmount: number;

  @Column({ type: DataType.DATE, allowNull: true })
  public disbursedDate: boolean;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public agreementId: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public crmNo: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public emiAmount: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public totalEmi: number;

  @Column({ type: DataType.DATE, allowNull: true })
  public emiCycleDate: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  public emiEndDate: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  public emiStartDate: Date;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public bucket: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public currentDpdBucket: number;

  @Column({ type: DataType.STRING(100), allowNull: true })
  public supplierName: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public bounceChargesOutstanding: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public interestOutstanding: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public penaltyOutstanding: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public principalOutstanding: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public totalOutstanding: number;

  @Column({ type: DataType.BIGINT, allowNull: true })
  public totalEmiOverDue: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public emiOverdueAmount: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public unpaidEmiAmount: number;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public offerEmiAmount: number;

  @Column({ type: DataType.BIGINT, allowNull: true })
  public waiverProposed: number;

  @Column({ type: DataType.DATE, allowNull: true })
  public lastPaymentDate: Date;

  @Column({ type: DataType.BIGINT, allowNull: true })
  public totalBounces: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  public otherLoanDetails: string;

  @Column({ type: DataType.DECIMAL(20, 2), allowNull: true })
  public maxSettlementAmount: number;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public vintageBand: string;

  @Column({ type: DataType.STRING(150), allowNull: true })
  public previousPaymentHistory: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public futurePrincipal: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public mobile: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public alternateContact1: string;

  @Column({ type: DataType.STRING(15), allowNull: true })
  public alternateContact2: string;

  @Column({ type: DataType.DECIMAL(13, 2), allowNull: true })
  public loanDetailGoldQuantityGrms: number;

  @Column({ type: DataType.DECIMAL(13, 2), allowNull: true })
  public loanDetailPurityInCt: number;

  @Column({ type: DataType.DECIMAL(13, 2), allowNull: true })
  public loanDetailValuationInInr: number;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public npaNumber: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public settlementEmail: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public customerClientId: string;

  @Column({ type: DataType.BIGINT, allowNull: true })
  public dpd: number;

  @Column({ type: DataType.STRING(20), allowNull: true })
  public portfolioType: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public borrowerClientId: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public productName: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public productType: string;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public clientBorrowerId: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public assignedUser: number;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  public deactivated: boolean;

  @Column({ type: DataType.STRING(50), allowNull: true })
  public groupId: string;
}

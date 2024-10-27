
import {
    Column,
    DataType,
    Model,
    Table
} from 'sequelize-typescript';
import { ISettlementNotes } from '../../interfaces/settlementNotes';

@Table({ tableName: 'settlement_notes' })
export default class SettlementNotes extends Model<ISettlementNotes> implements ISettlementNotes {

    @Column({ type: DataType.BIGINT, allowNull: false })
    public settlementid: number;

    @Column({ type: DataType.TEXT, allowNull: true })
    public module: string;

    @Column({ type: DataType.BIGINT, allowNull: false })
    public receiver: number;

    @Column({ type: DataType.BIGINT, allowNull: false })
    public originator: number;

    @Column({ type: DataType.TEXT, allowNull: true })
    public content: string;

    @Column({ type: DataType.STRING(20), allowNull: true })
    public status: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    public remarks: string;

    @Column({ type: DataType.DATE, allowNull: true })
    public seenAt: Date;

    @Column({ type: DataType.BOOLEAN, allowNull: true })
    public isclient: boolean;

    @Column({ type: DataType.INTEGER, allowNull: false })
    public borrowerId: number;

    @Column({ type: DataType.STRING(50), allowNull: false })
    public loanNumber: string;


}
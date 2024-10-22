
import { AllowNull, Column, DataType, HasMany, HasOne, Table } from 'sequelize-typescript';
import { IClients } from '../../interfaces/clients';
import BaseModel from '../baseModel';
import Cities from '../cities';
import States from '../states';
import ClientStates from '../clientStates';
@Table({ tableName: 'clients' })
export default class Clients extends BaseModel<IClients> implements IClients {
    @AllowNull(false)
    @Column(DataType.STRING(50))
    name: string;

    @Column(DataType.STRING(50))
    contactPerson: string;

    @Column(DataType.STRING(50))
    contactPersonEmail: string;

    @Column(DataType.STRING(15))
    contactPersonMobile: string;

    @Column(DataType.TEXT)
    address: string;

    @Column(DataType.TEXT)
    landmark: string;

    @Column(DataType.INTEGER)
    pinCode: number;

    @AllowNull(true)
    @Column(DataType.INTEGER.UNSIGNED)
    cityId: number;

    @AllowNull(true)
    @Column(DataType.INTEGER.UNSIGNED)
    stateId: number;

    @Column(DataType.SMALLINT)
    isISG: boolean;

    @HasOne(() => States, 'stateId')
    public state: States;

    @HasOne(() => Cities, 'cityId')
    public city: Cities;

    @HasMany(() => ClientStates, 'clientId')
    public clientStates: ClientStates[];
}

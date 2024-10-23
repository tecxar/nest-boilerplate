import bcrypt from 'bcrypt';
import { DataTypes } from 'sequelize';
import { AllowNull, BeforeCreate, BeforeUpdate, Column, DataType, HasMany, Index, Table } from 'sequelize-typescript';
import { UserTypeEnum } from '../../constants';
import { IUser } from '../../interfaces/users';
import BaseModel from '../baseModel';
import UserTasks from '../userTasks';

@Table({
    tableName: 'users',
    timestamps: true,
    paranoid: true
})
export default class User extends BaseModel<IUser> implements IUser {

    @AllowNull(false)
    @Column(DataType.TEXT)
    firstName: string;

    @Column(DataType.STRING(20))
    lastName: string;

    @AllowNull(false)
    @Column(DataType.STRING(100))
    public userEmail: string;

    @AllowNull(false)
    @Column(DataTypes.TEXT)
    public password: string;

    @AllowNull(false)
    //   @ForeignKey(() => Roles)
    @Column(DataType.INTEGER.UNSIGNED)
    roleId: number;
    //   @BelongsTo(() => Roles)
    //    @HasOne(() => Roles, 'id')
    //   role: Roles;

    @AllowNull(true)
    @Column(DataType.DATE)
    dob: Date;

    @AllowNull(true)
    @Column(DataType.DATE)
    doj: Date;

    @Column(DataTypes.BOOLEAN)
    public isActive: boolean;

    @Column(DataType.STRING(15))
    mobile: string;

    @AllowNull(true)
    @Index('idx_target')
    @Column(DataType.INTEGER)
    target: number;

    @AllowNull(true)
    @Column(DataType.STRING(100))
    signatureKey: string;

    @AllowNull(true)
    @Column(DataType.STRING(100))
    fileName: string;

    @AllowNull(true)
    @Column(DataType.STRING(255))
    landmark: string;

    @AllowNull(true)
    @Column(DataType.INTEGER.UNSIGNED)
    cityId: number;

    @AllowNull(true)
    @Column(DataType.INTEGER.UNSIGNED)
    stateId: number;

    @AllowNull(true)
    @Column(DataType.NUMBER)
    pincode: number;


    @AllowNull(true)
    @Column(DataType.ENUM)
    userType: UserTypeEnum;

    @BeforeUpdate
    @BeforeCreate
    static encryptPassword(instance: User) {
        if (instance.password) {
            const salt = bcrypt.genSaltSync(10, 'a');
            instance.password = bcrypt.hashSync(instance.password, salt);
        }
    }

    comparePassword(password: string): Promise<Boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, this.password).then(resolve).catch(reject);
        });
    }

    @HasMany(() => UserTasks, 'userId')
    userTasks: UserTasks;
}

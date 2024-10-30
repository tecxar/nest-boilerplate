import { DataTypes } from 'sequelize';
import * as bcrypt from 'bcrypt';
import {
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { UserTypeEnum } from '../../constants';
import { IUser } from '../../interfaces/users';
import BaseModel from '../baseModel';
import Roles from '../role';
import LoginDetails from '../loginDetails';
import UserTasks from '../userTasks';

@Table({
  tableName: 'users',
  timestamps: true,
})
export default class User extends BaseModel<IUser> implements IUser {
  @AllowNull(false)
  @Column(DataType.TEXT)
  firstName: string;

  @Column(DataType.STRING(20))
  lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  userEmail: string;

  @AllowNull(false)
  @Column(DataTypes.TEXT)
  password: string;

  @AllowNull(false)
  @ForeignKey(() => Roles)
  @Column(DataType.INTEGER.UNSIGNED)
  roleId: number;
  @BelongsTo(() => Roles)
  role: Roles;

  @AllowNull(true)
  @Column(DataType.DATEONLY)
  dob: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  doj: Date;

  @Column(DataTypes.BOOLEAN)
  isActive: boolean;

  @Column(DataType.STRING(15))
  mobile: string;

  @AllowNull(true)
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
  @Column(DataType.INTEGER)
  pincode: number;

  @AllowNull(true)
  @Column(DataType.ENUM(...Object.values(UserTypeEnum)))
  userType: UserTypeEnum;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  reportingRole: number;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  reportingTo: number;

  @AllowNull(true)
  @Column(DataType.INTEGER)
  extensionNumber: number;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  dialerReferenceId: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  dialerUserUuid: string;

  @AllowNull(true)
  @Column(DataType.INTEGER.UNSIGNED)
  dialerId?: number;

  @AllowNull(true)
  @Column(DataType.BIGINT)
  centerId: number;

  @HasMany(() => LoginDetails, 'userId')
  declare loginDetails: LoginDetails[];

  @HasMany(() => UserTasks, 'userId')
  declare userTasks: UserTasks[];

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
}

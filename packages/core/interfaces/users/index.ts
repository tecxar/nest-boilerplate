import { UserTypeEnum } from "../../constants";
import { IUserTask } from "../userTasks";

export interface IUser {

    //basic detail
    id?: number;
    firstName: string;
    lastName: string;
    userEmail: string;
    password: string;
    isActive: boolean;

    // contact detail
    mobile: string;
    dob?: Date;
    doj?: Date;
    landMark?: string;
    cityId: number;
    stateId: number;
    pincode: number;

    // office detail
    userType: UserTypeEnum;
    roleId: number;
    reportingRole?: number;
    reportingTo?: number;
    target?: number;
    extensionNumber?: number;
    dialerReferenceId?: string;
    userUuid?: string;
    dialerId?: number;



    // document detail
    signatureKey?: string | null;
    fileName?: string | null;



    tasks?: IUserTask[]
}





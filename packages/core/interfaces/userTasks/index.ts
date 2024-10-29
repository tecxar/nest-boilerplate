import { DatabaseObject } from "../baseObject";
import { IUserTaskCustomers } from "../userTaskCustomers";

export interface IUserTask extends DatabaseObject {
    id?: number;
    isStart: boolean;
    name: string;
    total?: number;
    customers?: IUserTaskCustomers[];
    userId?: number
  }
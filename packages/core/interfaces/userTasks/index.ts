import { IUserTaskCustomers } from "../userTaskCustomers";

export interface IUserTask {
    id?: number;
    isStart: boolean;
    name: string;
    total?: number;
    customers?: IUserTaskCustomers[];
    userId?: number
  }
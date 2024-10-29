import { DatabaseObject } from "../baseObject";

export interface IBreak extends DatabaseObject {
    id?: number;
    name: string;
    description: string;
    breakTime: Date;
  }
  
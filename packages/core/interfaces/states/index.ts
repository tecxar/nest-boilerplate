import { DatabaseObject } from "../baseObject";
import { IdObject } from "../idObject";

export interface IStates extends IdObject {
    name: string;
    stateCode: string;
  }
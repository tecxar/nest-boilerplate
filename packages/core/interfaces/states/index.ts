import { DatabaseObject } from "../baseObject";

export interface IStates extends DatabaseObject {
    name: string;
    stateCode: string;
  }
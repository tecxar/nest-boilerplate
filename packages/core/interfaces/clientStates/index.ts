import { DatabaseObject } from "../baseObject";

export interface IClientStates extends DatabaseObject {
    name: string;
    stateCode: string;
    clientId:number;
  }
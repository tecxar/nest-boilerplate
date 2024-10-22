import { DatabaseObject } from "../baseObject";

export interface ICities extends DatabaseObject {
  stateId: number;
  name: string;
}
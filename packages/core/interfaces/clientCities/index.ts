import { DatabaseObject } from "../baseObject";

export interface IClientCities extends DatabaseObject {
  stateId: number;
  name: string;
}
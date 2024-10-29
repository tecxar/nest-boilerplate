import { DatabaseObject } from "../baseObject";

export interface ICenters extends DatabaseObject {
  id?: number;
  name: string;
  address?: string;
  landmark?: string;
  cityId: number;
  stateId: number;
  zipcode: number;
  isActive: number;
  centerCode: string;
  phone: string;
}

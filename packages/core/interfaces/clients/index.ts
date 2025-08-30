import { DatabaseObject } from '../baseObject';

export interface IClients extends DatabaseObject {
  id?: number;
  name: string;
  contactPerson?: string;
  contactPersonEmail?: string;
  contactPersonMobile?: string;
  address1?: string;
  address2?: string;
  landmark?: string;
  pin?: string;
  cityId?: number;
  stateId?: number;
  isISG?: boolean;
  registeredGst?: string;
}

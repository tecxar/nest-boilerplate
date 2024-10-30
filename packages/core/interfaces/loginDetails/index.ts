import { DatabaseObject } from '../baseObject';

export interface ILoginDetails extends DatabaseObject {
  status: string;
  duration?: number;
}

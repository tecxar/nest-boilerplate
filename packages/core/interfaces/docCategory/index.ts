import { IdObject } from '../idObject';

export interface IDocCategory extends IdObject {
  id?: number;
  key: string;
  name: string;
}

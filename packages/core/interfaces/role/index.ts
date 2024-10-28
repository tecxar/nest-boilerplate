import { DatabaseObject } from '../baseObject';
export interface IRole extends DatabaseObject {
  id?: number;
  name: string;
  description: string;
  slug: string;
  parentId?: number;
  isActive: boolean;
}

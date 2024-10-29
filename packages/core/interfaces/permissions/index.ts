import { DatabaseObject } from "../baseObject";

export interface IPermission extends DatabaseObject {
  moduleId: number;
  title: string;
  slug: string;
  description: string;
}

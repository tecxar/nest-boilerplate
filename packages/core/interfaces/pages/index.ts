import { ActInactiveEnumType } from "../../constants";

export interface IPages  {
  moduleId: number;
  title: string;
  slug: string;
  link: string;
  status?: ActInactiveEnumType;
  is_deleted?: boolean;
  isHead?: boolean;
  icon?: string;
  parentId?: number;
}
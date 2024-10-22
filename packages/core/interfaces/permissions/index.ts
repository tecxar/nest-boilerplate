import { ActInactiveEnumType } from '../../constants';

export interface IPermission {
  moduleId: number;
  title: string;
  slug: string;
  link: string;
  description: string;
  status?: ActInactiveEnumType;
  is_deleted?: boolean;
  isHead?: boolean;
  icon?: string;
  parentId?: number;
}

export interface IRole {
  id?: number;
  name: string;
  description: string;
  slug: string;
  parentId?: number;
  isActive: boolean;
}

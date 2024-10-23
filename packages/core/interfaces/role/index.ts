export interface IRole {
  id?: number;
  name: string;
  description: string;
  slug: string;
  isActive: boolean;
}

export interface CreateRoleDto {
  id?: number;
  name: string;
  description: string;
  isActive: boolean;
}

export interface UpdateRoleDto {
  name?: string;
  description?: string;
}

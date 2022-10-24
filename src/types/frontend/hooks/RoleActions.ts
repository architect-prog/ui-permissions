import { Collection, CreateRoleRequest, RoleResponse, UpdateRoleRequest } from 'types/api';

export type RoleActions = {
  rolesCollection: Collection<RoleResponse>;
  createRole: (request: CreateRoleRequest) => Promise<boolean>;
  updateRole: (roleId: number, request: UpdateRoleRequest) => Promise<boolean>;
  deleteRole: (roleId: number) => Promise<boolean>;
};

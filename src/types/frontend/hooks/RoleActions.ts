import { Collection, CreateRoleRequest, RoleResponse, UpdateRoleRequest } from 'types/api';

export type RoleActions = {
  rolesCollection: Collection<RoleResponse>;
  deleteRole: (roleId: number) => Promise<boolean>;
  createRole: (request: CreateRoleRequest) => Promise<boolean>;
  updateRole: (roleId: number, request: UpdateRoleRequest) => Promise<boolean>;
};

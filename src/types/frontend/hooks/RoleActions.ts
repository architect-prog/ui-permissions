import { Collection, CreateRoleRequest, RoleResponse, UpdateRoleRequest } from 'types/api';

export type RoleActions = {
  rolesCollection: Collection<RoleResponse>;
  deleteRole: (roleId: number) => Promise<void>;
  createRole: (request: CreateRoleRequest) => Promise<void>;
  updateRole: (roleId: number, request: UpdateRoleRequest) => Promise<void>;
};

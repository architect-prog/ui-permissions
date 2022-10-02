import { PermissionRequest } from './PermissionRequest';
export type UpdatePermissionRequest = {
  areaId: number;
  roleId: number;
  permissions: PermissionRequest[];
};

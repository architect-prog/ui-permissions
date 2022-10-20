import { PermissionResponse } from 'types/api';
export type PermissionCollectionResponse = {
  roleId: number;
  areaId: number;
  customPermissions: PermissionResponse[];
};

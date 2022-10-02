import { PermissionResponse } from 'types/api';
export type PermissionCollectionResponse = {
  roleId: number;
  areaId: number;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  customPermissions: PermissionResponse[];
};

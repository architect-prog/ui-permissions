import React from 'react';
import { PermissionCollectionResponse, RoleResponse, UpdatePermissionRequest } from 'types/api';

export type PermissionCollectionActions = {
  permissionCollection: PermissionCollectionResponse | undefined;
  role: RoleResponse | undefined;
  // deletePermissionCollection: (roleIds?: number[], areaIds?: number[]) => Promise<void>;
  updatePermissionCollection: (request: UpdatePermissionRequest) => Promise<void>;
  onChecked: (label: string | undefined, checked: boolean) => void;
  onChangeRole: React.ChangeEventHandler<HTMLSelectElement>;
};

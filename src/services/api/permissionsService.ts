import api from './api';
import { endpoints } from 'appConstants';
import { PermissionCollectionResponse, UpdatePermissionRequest } from 'types/api';
import queryString from 'query-string';

const permissionsService = {
  getAll: async (areaIds?: number[], roleIds?: number[]): Promise<PermissionCollectionResponse[]> => {
    const areas = queryString.stringify({ areaIds: areaIds });
    const roles = queryString.stringify({ roleIds: roleIds });

    const response = await api.get<PermissionCollectionResponse[]>(`${endpoints.getPermissions}?${areas}&${roles}`);
    return response.data;
  },
  update: async (body: UpdatePermissionRequest): Promise<void> => {
    const response = await api.put<void>(endpoints.updatePermissions, body);
    return response.data;
  },
  delete: async (areaIds?: number[], roleIds?: number[]): Promise<void> => {
    const areas = queryString.stringify({ areaIds: areaIds });
    const roles = queryString.stringify({ roleIds: roleIds });

    const response = await api.delete<void>(`${endpoints.deletePermissions}?${areas}&${roles}`);
    return response.data;
  },
};

export default permissionsService;

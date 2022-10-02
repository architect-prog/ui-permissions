import api from './api';
import { endpoints } from 'appConstants';
import { PermissionCollectionResponse } from 'types/api';

const permissionsService = {
  getAll: async (): Promise<PermissionCollectionResponse[]> => {
    const response = await api
      .get<PermissionCollectionResponse[]>(endpoints.getPermissions)
      .finally();
    return response.data;
  },
  update: async (): Promise<PermissionCollectionResponse[]> => {
    const response = await api
      .get<PermissionCollectionResponse[]>(endpoints.updatePermissions)
      .finally();
    return response.data;
  },
  delete: async (): Promise<PermissionCollectionResponse[]> => {
    const response = await api.get(endpoints.deletePermissions).finally();
    return response.data;
  },
};

export default permissionsService;

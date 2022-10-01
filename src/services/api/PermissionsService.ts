import api from './api';
import { endpoints } from 'appConstants';
import { PermissionResponse } from 'types/api';

const permissionsService = {
  getAll: async (): Promise<PermissionResponse[]> => {
    const response = await api.get<PermissionResponse[]>(endpoints.getPermissions).finally();
    return response.data;
  },
};

export default permissionsService;

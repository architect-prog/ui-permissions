import api from './api';
import { endpoints } from 'appConstants';
import { CreateRoleRequest, RoleResponse, UpdateRoleRequest, Collection } from 'types/api';

const rolesService = {
  getAll: async (): Promise<Collection<RoleResponse>> => {
    const response = await api.get<Collection<RoleResponse>>(endpoints.getRoles);
    return response.data;
  },
  get: async (id: number): Promise<RoleResponse> => {
    const response = await api.get<RoleResponse>(endpoints.getRole(id));
    return response.data;
  },
  create: async (body: CreateRoleRequest): Promise<RoleResponse> => {
    const response = await api.post<RoleResponse>(endpoints.createRole, body);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    const response = await api.delete<void>(endpoints.deleteRole(id));
    return response.data;
  },
  update: async (id: number, body: UpdateRoleRequest): Promise<void> => {
    const response = await api.put<void>(endpoints.updateRole(id), body);
    return response.data;
  },
};

export default rolesService;

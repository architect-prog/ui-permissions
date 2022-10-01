import api from './api';
import { endpoints } from 'appConstants';
import { CreateRoleRequest, RoleResponse, UpdateRoleRequest } from 'types/api';
import { Collection } from 'types/api/responses/Collection';

const rolesService = {
  getAll: async (): Promise<Collection<RoleResponse>> => {
    const response = await api.get<Collection<RoleResponse>>(endpoints.getRoles).finally();
    return response.data;
  },
  get: async (id: number): Promise<RoleResponse> => {
    const response = await api.get<RoleResponse>(endpoints.getRole(id)).finally();
    return response.data;
  },
  create: async (body: CreateRoleRequest): Promise<RoleResponse> => {
    const response = await api.post<RoleResponse>(endpoints.createRole, body).finally();
    return response.data;
  },
  delete: async (id: number): Promise<RoleResponse> => {
    const response = await api.delete<RoleResponse>(endpoints.deleteRole(id)).finally();
    return response.data;
  },
  update: async (id: number, body: UpdateRoleRequest): Promise<RoleResponse> => {
    const response = await api.put<RoleResponse>(endpoints.updateRole(id), body).finally();
    return response.data;
  },
};

export default rolesService;

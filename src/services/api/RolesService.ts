import api from './api';
import { endpoints } from 'appConstants';
import {
  CreateRoleRequest,
  RoleResponse,
  UpdateRoleRequest,
  Collection,
  NoContentResponse,
} from 'types/api';

const RolesService = {
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
  update: async (id: number, body: UpdateRoleRequest): Promise<NoContentResponse> => {
    const response = await api.put(endpoints.updateRole(111), body).catch((x) => x.response);
    console.log(response);
    return response.data;
  },
};

export default RolesService;

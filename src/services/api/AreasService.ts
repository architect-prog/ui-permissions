import api from './api';
import { endpoints } from 'appConstants';
import { AreaResponse, CreateAreaRequest, UpdateAreaRequest, Collection } from 'types/api';

const areasService = {
  getAll: async (): Promise<Collection<AreaResponse>> => {
    const response = await api.get<Collection<AreaResponse>>(endpoints.getAreas).finally();
    return response.data;
  },
  get: async (id: number): Promise<AreaResponse> => {
    const response = await api.get<AreaResponse>(endpoints.getArea(id)).finally();
    return response.data;
  },
  create: async (body: CreateAreaRequest): Promise<AreaResponse> => {
    const response = await api.post<AreaResponse>(endpoints.createRole, body).finally();
    return response.data;
  },
  delete: async (id: number): Promise<AreaResponse> => {
    const response = await api.delete<AreaResponse>(endpoints.deleteArea(id)).finally();
    return response.data;
  },
  update: async (id: number, body: UpdateAreaRequest): Promise<AreaResponse> => {
    const response = await api.put<AreaResponse>(endpoints.updateArea(id), body).finally();
    return response.data;
  },
};

export default areasService;

import api from './api';
import { endpoints } from 'appConstants';
import {
  ApplicationResponse,
  CreateApplicationRequest,
  UpdateApplicationRequest,
  Collection,
} from 'types/api';

const applicationsService = {
  getAll: async (): Promise<Collection<ApplicationResponse>> => {
    const response = await api
      .get<Collection<ApplicationResponse>>(endpoints.getApplications)
      .finally();
    return response.data;
  },
  get: async (id: number): Promise<ApplicationResponse> => {
    const response = await api.get<ApplicationResponse>(endpoints.getApplication(id)).finally();
    return response.data;
  },
  create: async (body: CreateApplicationRequest): Promise<ApplicationResponse> => {
    const response = await api
      .post<ApplicationResponse>(endpoints.createApplication, body)
      .finally();
    return response.data;
  },
  delete: async (id: number): Promise<ApplicationResponse> => {
    const response = await api
      .delete<ApplicationResponse>(endpoints.deleteApplication(id))
      .finally();
    return response.data;
  },
  update: async (id: number, body: UpdateApplicationRequest): Promise<ApplicationResponse> => {
    const response = await api
      .put<ApplicationResponse>(endpoints.updateApplication(id), body)
      .finally();
    return response.data;
  },
};

export default applicationsService;

import api from './api';
import { endpoints } from 'appConstants';
import { ApplicationResponse, CreateApplicationRequest, UpdateApplicationRequest, Collection } from 'types/api';

const applicationsService = {
  getAll: async (): Promise<Collection<ApplicationResponse>> => {
    const response = await api.get<Collection<ApplicationResponse>>(endpoints.getApplications);
    return response.data;
  },
  get: async (id: number): Promise<ApplicationResponse> => {
    const response = await api.get<ApplicationResponse>(endpoints.getApplication(id));
    return response.data;
  },
  create: async (body: CreateApplicationRequest): Promise<ApplicationResponse> => {
    const response = await api.post<ApplicationResponse>(endpoints.createApplication, body);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    const response = await api.delete<void>(endpoints.deleteApplication(id));
    return response.data;
  },
  update: async (id: number, body: UpdateApplicationRequest): Promise<void> => {
    const response = await api.put<void>(endpoints.updateApplication(id), body);
    return response.data;
  },
};

export default applicationsService;

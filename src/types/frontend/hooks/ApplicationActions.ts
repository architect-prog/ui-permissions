import { ApplicationResponse, Collection, CreateApplicationRequest, UpdateApplicationRequest } from 'types/api';

export type ApplicationActions = {
  applicationsCollection: Collection<ApplicationResponse>;
  deleteApplication: (applicationId: number) => Promise<void>;
  createApplication: (request: CreateApplicationRequest) => Promise<void>;
  updateApplication: (applicationId: number, request: UpdateApplicationRequest) => Promise<void>;
};

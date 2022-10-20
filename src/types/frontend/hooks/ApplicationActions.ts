import { ApplicationResponse, Collection, CreateApplicationRequest, UpdateApplicationRequest } from 'types/api';

export type ApplicationActions = {
  applicationsCollection: Collection<ApplicationResponse>;
  deleteApplication: (applicationId: number) => Promise<boolean>;
  createApplication: (request: CreateApplicationRequest) => Promise<boolean>;
  updateApplication: (applicationId: number, request: UpdateApplicationRequest) => Promise<boolean>;
};

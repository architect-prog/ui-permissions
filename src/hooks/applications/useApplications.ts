import { useCallback } from 'react';
import { applicationsService } from 'services';
import { useRecoilState } from 'recoil';
import { applicationsAtom } from 'store/recoil/atoms';
import {
  Collection,
  ApplicationResponse,
  CreateApplicationRequest,
  UpdateApplicationRequest,
} from 'types/api';

export type UseApplications = {
  applicationsCollection: Collection<ApplicationResponse>;
  deleteApplication: (applicationId: number) => Promise<void>;
  createApplication: (request: CreateApplicationRequest) => Promise<void>;
  updateApplication: (applicationId: number, request: UpdateApplicationRequest) => Promise<void>;
};

const useApplications = (): UseApplications => {
  const [applicationsCollection, setApplicationsCollection] = useRecoilState(applicationsAtom);

  const createApplication = useCallback(
    async (request: CreateApplicationRequest) => {
      const createdApplication = await applicationsService.create(request);

      setApplicationsCollection((applicationsCollection) => {
        const { items, count } = applicationsCollection;
        const updatedApplications = {
          items: [...items, createdApplication],
          count: count + 1,
        };
        return updatedApplications;
      });
    },
    [setApplicationsCollection],
  );

  const updateApplication = useCallback(
    async (applicationId: number, request: UpdateApplicationRequest) => {
      await applicationsService.update(applicationId, request);
      const updateApplication: ApplicationResponse = {
        id: applicationId,
        name: request.name,
        description: request.description,
      };

      setApplicationsCollection((applicationsCollection) => {
        const { items, count } = applicationsCollection;
        const applicationItems = [...items];
        applicationItems[applicationItems.findIndex((item) => item.id == applicationId)] =
          updateApplication;

        const newApplicationsCollection: Collection<ApplicationResponse> = {
          items: applicationItems,
          count: count,
        };

        return newApplicationsCollection;
      });
    },
    [setApplicationsCollection],
  );

  const deleteApplication = useCallback(
    async (applicationId: number) => {
      await applicationsService.delete(applicationId);
      setApplicationsCollection((roles) => {
        const { items, count } = roles;
        const updatedRoles = {
          items: items.filter((x) => x.id !== applicationId),
          count: count - 1,
        };
        return updatedRoles;
      });
    },
    [setApplicationsCollection],
  );

  return {
    createApplication: createApplication,
    updateApplication: updateApplication,
    deleteApplication: deleteApplication,
    applicationsCollection: applicationsCollection,
  };
};

export default useApplications;

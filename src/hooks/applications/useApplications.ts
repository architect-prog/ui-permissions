import { useCallback } from 'react';
import { applicationsService } from 'services';
import { useRecoilState } from 'recoil';
import { applicationsAtom } from 'store/recoil/atoms';
import { ApplicationActions } from 'types/frontend';
import { collection, safeApiRequest } from 'utils';
import { useApiErrorHandling } from 'hooks';
import { ApplicationResponse, CreateApplicationRequest, UpdateApplicationRequest } from 'types/api';

const useApplications = (): ApplicationActions => {
  const { handleApiError } = useApiErrorHandling();
  const [applicationsCollection, setApplicationsCollection] = useRecoilState(applicationsAtom);

  const createApplication = useCallback(
    async (request: CreateApplicationRequest) => {
      const response = await safeApiRequest(async () => await applicationsService.create(request));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      setApplicationsCollection((applications) => {
        const updatedApplications = collection(applications).add(response.data);
        return updatedApplications;
      });
    },
    [setApplicationsCollection, handleApiError],
  );

  const updateApplication = useCallback(
    async (applicationId: number, request: UpdateApplicationRequest) => {
      const response = await safeApiRequest(async () => await applicationsService.update(applicationId, request));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      const updatedApplication: ApplicationResponse = {
        id: applicationId,
        name: request.name,
        description: request.description,
      };

      setApplicationsCollection((applications) => {
        const updatedApplications = collection(applications).replace((x) => x.id == applicationId, updatedApplication);
        return updatedApplications;
      });
    },
    [setApplicationsCollection, handleApiError],
  );

  const deleteApplication = useCallback(
    async (applicationId: number) => {
      const response = await safeApiRequest(async () => await applicationsService.delete(applicationId));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      setApplicationsCollection((applications) => {
        const updatedApplications = collection(applications).remove((x) => x.id !== applicationId);
        return updatedApplications;
      });
    },
    [setApplicationsCollection, handleApiError],
  );

  return {
    createApplication: createApplication,
    updateApplication: updateApplication,
    deleteApplication: deleteApplication,
    applicationsCollection: applicationsCollection,
  };
};

export default useApplications;

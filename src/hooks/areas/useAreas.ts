import { useCallback } from 'react';
import { areasService } from 'services';
import { useRecoilState } from 'recoil';
import { areasAtom } from 'store/recoil/atoms';
import { AreaActions } from 'types/frontend';
import { safeApiRequest, collection } from 'utils';
import { useApiErrorHandling } from 'hooks';
import { AreaResponse, CreateAreaRequest, UpdateAreaRequest } from 'types/api';

const useAreas = (applicationId?: number): AreaActions => {
  const { handleApiError } = useApiErrorHandling();
  const [areasCollection, setAreasCollection] = useRecoilState(areasAtom(applicationId));

  const createArea = useCallback(
    async (request: CreateAreaRequest) => {
      const response = await safeApiRequest(async () => await areasService.create(request));
      if (!response.success) {
        handleApiError(response);
        return false;
      }

      setAreasCollection((areas) => {
        const updatedAreas = collection(areas).add(response.data);
        return updatedAreas;
      });

      return true;
    },
    [setAreasCollection, handleApiError],
  );

  const updateArea = useCallback(
    async (areaId: number, request: UpdateAreaRequest) => {
      const response = await safeApiRequest(async () => await areasService.update(areaId, request));
      if (!response.success) {
        handleApiError(response);
        return false;
      }

      const updatedArea: AreaResponse = {
        id: areaId,
        applicationId: request.applicationId,
        name: request.name,
      };

      setAreasCollection((areas) => {
        const updatedAreas = collection(areas).replace((x) => x.id == areaId, updatedArea);
        return updatedAreas;
      });

      return true;
    },
    [setAreasCollection, handleApiError],
  );

  const deleteArea = useCallback(
    async (areaId: number) => {
      const response = await safeApiRequest(async () => await areasService.delete(areaId));
      if (!response.success) {
        handleApiError(response);
        return false;
      }

      setAreasCollection((areas) => {
        const updatedRoles = collection(areas).remove((x) => x.id !== areaId);
        return updatedRoles;
      });

      return true;
    },
    [setAreasCollection, handleApiError],
  );

  return {
    createArea: createArea,
    updateArea: updateArea,
    deleteArea: deleteArea,
    areasCollection: areasCollection,
  };
};

export default useAreas;

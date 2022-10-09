import { useCallback } from 'react';
import { AreasService } from 'services';
import { useRecoilState } from 'recoil';
import { areasAtom } from 'store/recoil/atoms';
import { Collection, AreaResponse, CreateAreaRequest, UpdateAreaRequest } from 'types/api';

export type UseAreas = {
  areasCollection: Collection<AreaResponse>;
  deleteArea: (areaId: number) => Promise<void>;
  createArea: (request: CreateAreaRequest) => Promise<void>;
  updateArea: (areaId: number, request: UpdateAreaRequest) => Promise<void>;
};

const useAreas = (applicationId?: number): UseAreas => {
  const [areasCollection, setAreasCollection] = useRecoilState(areasAtom(applicationId));

  const createArea = useCallback(
    async (request: CreateAreaRequest) => {
      const createdArea = await AreasService.create(request);

      setAreasCollection((areasCollection) => {
        const { items, count } = areasCollection;
        const updatedAreas = {
          items: [...items, createdArea],
          count: count + 1,
        };
        return updatedAreas;
      });
    },
    [setAreasCollection],
  );

  const updateArea = useCallback(
    async (areaId: number, request: UpdateAreaRequest) => {
      await AreasService.update(areaId, request);
      const updateArea: AreaResponse = {
        id: areaId,
        applicationId: request.applicationId,
        name: request.name,
      };

      setAreasCollection((areasCollection) => {
        const { items, count } = areasCollection;
        const areaItems = [...items];
        areaItems[items.findIndex((item) => item.id == areaId)] = updateArea;

        const newAreasCollection = {
          items: areaItems,
          count: count,
        };

        return newAreasCollection;
      });
    },
    [setAreasCollection],
  );

  const deleteArea = useCallback(
    async (areaId: number) => {
      const result = await AreasService.delete(areaId);

      setAreasCollection((roles) => {
        const { items, count } = roles;
        const updatedRoles = {
          items: items.filter((x) => x.id !== areaId),
          count: count - 1,
        };
        return updatedRoles;
      });
    },
    [setAreasCollection],
  );

  return {
    createArea: createArea,
    updateArea: updateArea,
    deleteArea: deleteArea,
    areasCollection: areasCollection,
  };
};

export default useAreas;

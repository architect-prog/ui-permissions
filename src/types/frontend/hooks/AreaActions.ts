import { AreaResponse, Collection, CreateAreaRequest, UpdateAreaRequest } from 'types/api';

export type AreaActions = {
  areasCollection: Collection<AreaResponse>;
  deleteArea: (areaId: number) => Promise<boolean>;
  createArea: (request: CreateAreaRequest) => Promise<boolean>;
  updateArea: (areaId: number, request: UpdateAreaRequest) => Promise<boolean>;
};

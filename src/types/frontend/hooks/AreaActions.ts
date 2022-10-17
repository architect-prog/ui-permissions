import { AreaResponse, Collection, CreateAreaRequest, UpdateAreaRequest } from 'types/api';

export type AreaActions = {
  areasCollection: Collection<AreaResponse>;
  deleteArea: (areaId: number) => Promise<void>;
  createArea: (request: CreateAreaRequest) => Promise<void>;
  updateArea: (areaId: number, request: UpdateAreaRequest) => Promise<void>;
};

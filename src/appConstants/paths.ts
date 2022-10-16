import { controllers } from './controllers';
import { operations } from './operations';

export const paths = Object.freeze({
  updateApplication: (id: number) => `/${controllers.applications}/${id}/${operations.update}`,
  areas: (applicationId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}`,
  createArea: (applicationId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}/${operations.create}`,
  updateArea: (applicationId: number, areaId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}/${areaId}/${operations.update}`,
  updateRole: (id: number) => `/${controllers.roles}/${id}/${operations.update}`,
});

import { controllers } from './controllers';
import { operations } from './operations';

export const paths = Object.freeze({
  main: '/',
  permissions: `/${controllers.permissions}`,
  applications: `/${controllers.applications}`,
  createApplication: `/${controllers.applications}/${operations.create}`,
  updateApplication: (id: number) => `/${controllers.applications}/${id}/${operations.update}`,
  areas: (applicationId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}`,
  createArea: (applicationId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}/${operations.create}`,
  updateArea: (applicationId: number, areaId: number) =>
    `/${controllers.applications}/${applicationId}/${controllers.areas}/${areaId}/${operations.update}`,
  roles: `/${controllers.roles}`,
  createRole: `/${controllers.roles}/${operations.create}`,
  updateRole: (id: number) => `/${controllers.roles}/${id}/${operations.update}`,
  notFoundError: '*',
});

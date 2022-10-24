import { controllers } from './controllers';
import { operations } from './operations';
import { params } from './params';

type param = string | number;

export const routes = Object.freeze({
  main: '/',
  dashboard: {
    /* Applications */
    applications: `/${controllers.applications}`,
    createApplication: `/${controllers.applications}/${operations.create}`,
    updateApplication: (applicationId: param = `:${params.applicationId}`) =>
      `/${controllers.applications}/${applicationId}/${operations.update}`,

    /* Areas */
    area: (applicationId: param = `:${params.applicationId}`, areaId: param = `:${params.areaId}`) =>
      `/${controllers.applications}/${applicationId}/${controllers.areas}/${areaId}`,
    areas: (applicationId: param = `:${params.applicationId}`) =>
      `/${controllers.applications}/${applicationId}/${controllers.areas}`,
    createArea: (applicationId: param = `:${params.applicationId}`) =>
      `/${controllers.applications}/${applicationId}/${controllers.areas}/${operations.create}`,
    updateArea: (applicationId: param = `:${params.applicationId}`, areaId: param = `:${params.areaId}`) =>
      `/${controllers.applications}/${applicationId}/${controllers.areas}/${areaId}/${operations.update}`,

    /* Permissions */
    permissions: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}/${controllers.permissions}`,

    /* Roles */
    roles: `/${controllers.roles}`,
    createRole: `/${controllers.roles}/${operations.create}`,
    updateRole: (roleId: param = `:${params.roleId}`) => `/${controllers.roles}/${roleId}/${operations.update}`,

    /* Errors */
    notFoundError: '/notFound',
    internalServerError: '/internalServerError',
  },
});

export const statusCodePages: { [key: number]: string } = {
  404: routes.dashboard.notFoundError,
  500: routes.dashboard.internalServerError,
};

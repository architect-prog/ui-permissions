import { StatusCodePage } from 'types/frontend';
import { controllers } from './controllers';
import { operations } from './operations';
import { params } from './params';

export const routes = Object.freeze({
  main: '/',
  dashboard: {
    /* Applications */
    applications: `/${controllers.applications}`,
    createApplication: `/${controllers.applications}/${operations.create}`,
    updateApplication: `/${controllers.applications}/:${params.applicationId}/${operations.update}`,

    /* Areas */
    area: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}`,
    areas: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}`,
    createArea: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/${operations.create}`,
    updateArea: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}/${operations.update}`,

    /* Permissions */
    permissions: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}/${controllers.permissions}`,

    /* Roles */
    roles: `/${controllers.roles}`,
    createRole: `/${controllers.roles}/${operations.create}`,
    updateRole: `/${controllers.roles}/:${params.roleId}/${operations.update}`,

    /* Errors */
    notFoundError: '*',
    internalServerError: '*',
  },
});

export const statusCodePages: StatusCodePage[] = [
  {
    path: routes.dashboard.notFoundError,
    statusCode: 404,
  },
  {
    path: routes.dashboard.internalServerError,
    statusCode: 500,
  },
];

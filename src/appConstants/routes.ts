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
    areas: controllers.applications,
    createArea: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/${operations.create}`,
    updateArea: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}/${operations.update}`,

    /* Permissions */
    permissions: `/${controllers.applications}/:${params.applicationId}/${controllers.areas}/:${params.areaId}/${controllers.permissions}`,

    /* Roles */
    roles: `/${controllers.roles}`,
    createRole: `/${controllers.roles}/${operations.create}`,
    updateRole: `/${controllers.roles}/:${params.roleId}/${operations.update}`,

    /* 404 */
    notFoundError: '*',
  },
});
//   <Route key={paths.notFoundError} path={paths.notFoundError} element={<>error</>} />

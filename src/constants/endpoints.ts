const baseUrl = 'api';

const controllers = Object.freeze({
  roles: 'roles',
  permissions: 'permissions',
  applications: 'applications',
  areas: 'areas',
});

const endpoints = Object.freeze({
  //*** Applications ***//
  createApplication: controllers.applications,
  getApplications: controllers.applications,
  getApplication: (applicationId: number) => `${controllers.applications}/${applicationId}`,
  updateApplication: (applicationId: number) => `${controllers.applications}/${applicationId}`,
  deleteApplication: (applicationId: number) => `${controllers.applications}/${applicationId}`,

  //*** Areas ***//
  createArea: controllers.areas,
  getAreas: controllers.areas,
  getArea: (areaId: number) => `${controllers.areas}/${areaId}`,
  updateArea: (areaId: number) => `${controllers.areas}/${areaId}`,
  deleteArea: (areaId: number) => `${controllers.areas}/${areaId}`,

  //*** Roles ***//
  createRole: controllers.roles,
  getRoles: controllers.roles,
  getRole: (roleId: number) => `${controllers.roles}/${roleId}`,
  updateRole: (roleId: number) => `${controllers.roles}/${roleId}`,
  deleteRole: (roleId: number) => `${controllers.roles}/${roleId}`,
});

export default endpoints;

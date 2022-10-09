const paths = Object.freeze({
  main: '/',
  permissions: '/permissions',
  applications: '/applications',
  createApplication: '/applications/create',
  updateApplication: (id: number) => `/applications/${id}/update`,
  areas: (applicationId: number) => `/applications/${applicationId}/areas`,
  createArea: (applicationId: number) => `/applications/${applicationId}/areas/create`,
  updateArea: (applicationId: number, areaId: number) =>
    `/applications/${applicationId}/areas/${areaId}/update`,
  roles: '/roles',
  createRole: '/roles/create',
  updateRole: (id: number) => `/roles/${id}/update`,
  notFoundError: '*',
});

export default paths;

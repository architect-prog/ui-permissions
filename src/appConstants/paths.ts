const paths = Object.freeze({
  main: '/',
  permissions: '/permissions',
  applications: '/applications',
  areas: '/areas',
  createArea: (applicationId: number) => `/applications/${applicationId}/areas/create`,
  roles: '/roles',
  createRole: '/roles/create',
  updateRole: (id: number) => `/roles/update/${id}`,
  notFoundError: '*',
});

export default paths;

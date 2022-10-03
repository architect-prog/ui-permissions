const paths = Object.freeze({
  main: '/',
  permissions: '/permissions',
  applications: '/applications',
  areas: '/areas',
  roles: '/roles',
  createRole: '/roles/create',
  updateRole: (id: number) => `/roles/update/${id}`,
  notFoundError: '*',
});

export default paths;

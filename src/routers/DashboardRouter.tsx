import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Applications, Permissions, Areas, Roles } from 'modules/pages';
import paths from 'appConstants/paths';
import UpdateRoleForm from 'modules/pages/Roles/UpdateRoleForm';
import CreateRoleForm from 'modules/pages/Roles/CreateRoleForm';

export default function DashboardRouter() {
  return (
    <Routes>
      {[paths.main, paths.applications].map((path) => (
        <Route key={paths.main} path={path} element={<Applications />} />
      ))}
      <Route
        key={`${paths.roles}/update`}
        path={`${paths.roles}/update/:id`}
        element={<UpdateRoleForm />}
      />
      <Route
        key={`${paths.roles}/create`}
        path={`${paths.roles}/create`}
        element={<CreateRoleForm />}
      />
      <Route key={paths.permissions} path={paths.permissions} element={<Permissions />} />
      <Route key={paths.areas} path={paths.areas} element={<Areas />} />
      <Route key={paths.roles} path={paths.roles} element={<Roles />} />
      <Route key={paths.notFoundError} path={paths.notFoundError} element={<>error</>} />
    </Routes>
  );
}

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Applications,
  Permissions,
  Areas,
  Roles,
  CreateAreaForm,
  UpdateAreaForm,
} from 'modules/pages';
import UpdateRoleForm from 'modules/pages/Roles/UpdateRoleForm';
import CreateRoleForm from 'modules/pages/Roles/CreateRoleForm';
import CreateApplicationForm from 'modules/pages/Applications/CreateApplicationForm';
import UpdateApplicationForm from 'modules/pages/Applications/UpdateApplicationForm';
import { routes } from 'appConstants';

export default function DashboardRouter() {
  return (
    <Routes>
      {[routes.main, routes.dashboard.applications].map((path) => (
        <Route key={path} path={path} element={<Applications />} />
      ))}
      <Route
        key={routes.dashboard.createApplication}
        path={routes.dashboard.createApplication}
        element={<CreateApplicationForm />}
      />
      <Route
        key={routes.dashboard.updateApplication}
        path={routes.dashboard.updateApplication}
        element={<UpdateApplicationForm />}
      />
      <Route
        key={routes.dashboard.updateRole}
        path={routes.dashboard.updateRole}
        element={<UpdateRoleForm />}
      />
      <Route
        key={routes.dashboard.createRole}
        path={routes.dashboard.createRole}
        element={<CreateRoleForm />}
      />
      <Route
        key={routes.dashboard.permissions}
        path={routes.dashboard.permissions}
        element={<Permissions />}
      />
      <Route key={routes.dashboard.areas} path={routes.dashboard.areas} element={<Areas />} />
      <Route
        key={routes.dashboard.createArea}
        path={routes.dashboard.createArea}
        element={<CreateAreaForm />}
      />
      <Route
        key={routes.dashboard.updateArea}
        path={routes.dashboard.updateArea}
        element={<UpdateAreaForm />}
      />
      <Route key={routes.dashboard.roles} path={routes.dashboard.roles} element={<Roles />} />
      <Route
        key={routes.dashboard.notFoundError}
        path={routes.dashboard.notFoundError}
        element={<>error</>}
      />
    </Routes>
  );
}

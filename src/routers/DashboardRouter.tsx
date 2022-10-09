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
import paths from 'appConstants/paths';
import UpdateRoleForm from 'modules/pages/Roles/UpdateRoleForm';
import CreateRoleForm from 'modules/pages/Roles/CreateRoleForm';
import CreateApplicationForm from 'modules/pages/Applications/CreateApplicationForm';
import UpdateApplicationForm from 'modules/pages/Applications/UpdateApplicationForm';

export default function DashboardRouter() {
  return (
    <Routes>
      {[paths.main, paths.applications].map((path) => (
        <Route key={path} path={path} element={<Applications />} />
      ))}
      <Route
        key={paths.createApplication}
        path={paths.createApplication}
        element={<CreateApplicationForm />}
      />
      <Route
        key={`${paths.applications}/:applicationId/update`}
        path={`${paths.applications}/:applicationId/update`}
        element={<UpdateApplicationForm />}
      />
      <Route
        key={`${paths.roles}/:id/update`}
        path={`${paths.roles}/:id/update`}
        element={<UpdateRoleForm />}
      />
      <Route
        key={`${paths.roles}/create`}
        path={`${paths.roles}/create`}
        element={<CreateRoleForm />}
      />
      <Route key={paths.permissions} path={paths.permissions} element={<Permissions />} />
      <Route
        key={`${paths.applications}/:id/areas`}
        path={`${paths.applications}/:id/areas`}
        element={<Areas />}
      />
      <Route
        key={`${paths.applications}/:applicationId/areas/create`}
        path={`${paths.applications}/:applicationId/areas/create`}
        element={<CreateAreaForm />}
      />
      <Route
        key={`${paths.applications}/:applicationId/areas/:areaId/update`}
        path={`${paths.applications}/:applicationId/areas/:areaId/update`}
        element={<UpdateAreaForm />}
      />
      <Route key={paths.roles} path={paths.roles} element={<Roles />} />
      <Route key={paths.notFoundError} path={paths.notFoundError} element={<>error</>} />
    </Routes>
  );
}

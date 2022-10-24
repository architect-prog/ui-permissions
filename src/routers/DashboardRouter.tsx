import React from 'react';
import { routes } from 'appConstants';
import { Route, Routes } from 'react-router-dom';
import { Applications, Permissions, Areas, Roles, CreateAreaForm, UpdateAreaForm } from 'modules/pages';
import UpdateRoleForm from 'modules/pages/Roles/UpdateRoleForm';
import CreateRoleForm from 'modules/pages/Roles/CreateRoleForm';
import CreateApplicationForm from 'modules/pages/Applications/CreateApplicationForm';
import UpdateApplicationForm from 'modules/pages/Applications/UpdateApplicationForm';
import AreaDetails from 'modules/pages/Applications/Areas/AreaDetails';
import NotFound from 'modules/pages/Common/NotFound';
import InternalServerError from 'modules/pages/Common/InternalServerError';

const DashboardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.main} element={<Applications />} />
      <Route path={routes.dashboard.applications} element={<Applications />} />
      <Route path={routes.dashboard.createApplication} element={<CreateApplicationForm />} />
      <Route path={routes.dashboard.updateApplication()} element={<UpdateApplicationForm />} />

      <Route path={routes.dashboard.roles} element={<Roles />} />
      <Route path={routes.dashboard.createRole} element={<CreateRoleForm />} />
      <Route path={routes.dashboard.updateRole()} element={<UpdateRoleForm />} />

      <Route path={routes.dashboard.permissions} element={<Permissions />} />

      <Route path={routes.dashboard.areas()} element={<Areas />} />
      <Route path={routes.dashboard.area()} element={<AreaDetails />} />
      <Route path={routes.dashboard.createArea()} element={<CreateAreaForm />} />
      <Route path={routes.dashboard.updateArea()} element={<UpdateAreaForm />} />
      <Route path={routes.dashboard.notFoundError} element={<NotFound />} />
      <Route path={routes.dashboard.internalServerError} element={<InternalServerError />} />
    </Routes>
  );
};

export default DashboardRouter;

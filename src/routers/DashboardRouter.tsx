import paths from 'constants/paths';
import { Dashboard } from 'modules/layout';
import { Applications, Permissions, Areas, Roles } from 'modules/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path={paths.main} element={<Dashboard />}>
        <Route path={paths.permissions} element={<Permissions />} />
        <Route path={paths.applications} element={<Applications />} />
        <Route path={paths.areas} element={<Areas />} />
        <Route path={paths.roles} element={<Roles />} />
        <Route path={paths.notFoundError} element={<>error</>} />
      </Route>
    </Routes>
  );
}

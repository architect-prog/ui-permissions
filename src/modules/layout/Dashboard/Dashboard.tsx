import React from 'react';
import { Outlet } from 'react-router';
import { Page } from './Page';
import { Sidebar } from './Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div id="page">
      <Sidebar />
      <Page>
        <Outlet />
      </Page>
    </div>
  );
};

export default Dashboard;

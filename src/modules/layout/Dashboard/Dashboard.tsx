import React from 'react';
import DashboardRouter from 'routers/DashboardRouter';
import { Page } from './Page';
import { Sidebar } from './Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Page>
        <DashboardRouter />
      </Page>
    </div>
  );
};

export default Dashboard;

import React, { Suspense } from 'react';
import DashboardRouter from 'routers/DashboardRouter';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Suspense fallback={<div>Loading...</div>}>
        <DashboardRouter />
      </Suspense>
    </div>
  );
};

export default Dashboard;

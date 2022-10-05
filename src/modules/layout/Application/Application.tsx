import React, { Suspense } from 'react';
import DashboardRouter from 'routers/DashboardRouter';
import { Header, Page, Sidebar, Dashboard } from '../';

const Application: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard>
        <Sidebar></Sidebar>
        <Page>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardRouter />
          </Suspense>
        </Page>
      </Dashboard>

      {/* <Footer /> */}
    </>
  );
};

export default Application;

import React, { Suspense } from 'react';
import DashboardRouter from 'routers/DashboardRouter';
import { Header, Page, Sidebar, Dashboard } from '..';

const App: React.FC = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Dashboard>
          <Sidebar></Sidebar>
          <Page>
            <Suspense fallback={<div>Loading...</div>}>
              <DashboardRouter />
            </Suspense>
          </Page>
        </Dashboard>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default App;

import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { DashboardRouter } from 'routers';
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
        <ToastContainer />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default App;

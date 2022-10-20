import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { DashboardRouter } from 'routers';
import Dashboard from './Dashboard';
import Header from './Header';
import Page from './Page';
import Sidebar from './Sidebar';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header></Header>
      <Dashboard>
        <Sidebar></Sidebar>
        <Page>
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardRouter></DashboardRouter>
          </Suspense>
        </Page>
      </Dashboard>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;

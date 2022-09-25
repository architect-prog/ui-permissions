import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { Dashboard } from 'modules/layout';
import { BrowserRouter } from 'react-router-dom';
import DashboardRouter from 'routers/DashboardRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <DashboardRouter />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);

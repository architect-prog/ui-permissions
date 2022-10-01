import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from 'modules/layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);

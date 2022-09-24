import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div />}>
        <div className="tools">
          <button className="client-button" title="client">
            Client
          </button>
          <button className="adviser-button" title="Adviser">
            Adviser
          </button>
          <button className="admin-button" title="Admin">
            Admin
          </button>
        </div>
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
);

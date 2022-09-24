import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div />}>
        <div>Hi world!</div>
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
);

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Application } from 'modules/layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);

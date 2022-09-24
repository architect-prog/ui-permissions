import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { HomePage } from 'modules/pages';
import ThemeProvider from 'providers/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <RecoilRoot>
      <Suspense fallback={<div />}>
        <ThemeProvider>
          <HomePage />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
);

import React from 'react';
import { Footer, Header, Main, Sidebar, Dashboard } from '../';

const Application: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar></Sidebar>
        <Dashboard></Dashboard>
      </Main>
      <Footer />
    </>
  );
};

export default Application;

import React from 'react';
import { Navbar } from './Navbar';

const Sidebar: React.FC = () => {
  return (
    <>
      <div id="page">
        <div id="sideBar">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from 'react';
import { ChildrenProps } from 'types/frontend';

const Main: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="page">
      <div className="page-content">{children}</div>
    </main>
  );
};

export default Main;

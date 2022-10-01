import React from 'react';
import { ChildrenProps } from 'types/frontend';

const Page: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="page">
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Page;

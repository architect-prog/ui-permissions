import React from 'react';
import { ChildrenProps } from 'types/frontend';

const Page: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div id="content">
      <div className="page-header">Page</div>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Page;

import React from 'react';
import { ChildrenProps } from 'types/frontend';

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="dashboard">{children}</div>;
};

export default Dashboard;

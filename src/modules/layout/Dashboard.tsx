import classNames from 'classnames';
import React from 'react';
import { WrapperProps } from 'types/frontend';

const Dashboard: React.FC<WrapperProps> = ({ children, className }) => {
  const dashboardClassName = classNames('dashboard', className ?? '');

  return <main className={dashboardClassName}>{children}</main>;
};

export default Dashboard;

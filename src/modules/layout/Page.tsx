import classNames from 'classnames';
import React from 'react';
import { WrapperProps } from 'types/frontend';

const Page: React.FC<WrapperProps> = ({ children, className }) => {
  const pageClassName = classNames('page', className ?? '');

  return (
    <div className={pageClassName}>
      <div className="page-content">{children}</div>
    </div>
  );
};

export default Page;

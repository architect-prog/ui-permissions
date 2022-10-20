import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const Description: React.FC<WrapperProps> = ({ children, className }) => {
  const formClassName = classNames('description', className ?? '');

  return <div className={formClassName}>{children}</div>;
};

export default Description;

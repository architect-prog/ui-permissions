import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const Title: React.FC<WrapperProps> = ({ children, className }) => {
  const formClassName = classNames('title', className ?? '');

  return <div className={formClassName}>{children}</div>;
};

export default Title;

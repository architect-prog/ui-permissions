import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const Label: React.FC<WrapperProps> = ({ children, className }) => {
  const labelClassName = classNames('label', className ?? '');

  return <label className={labelClassName}>{children}</label>;
};

export default Label;

import React from 'react';
import classNames from 'classnames';
import { LabelProps } from 'types/frontend';

const Label: React.FC<LabelProps> = ({ children, className }) => {
  const labelClassName = classNames('label', className ?? '');

  return <label className={labelClassName}>{children}</label>;
};

export default Label;

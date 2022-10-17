import React from 'react';
import classNames from 'classnames';
import { LabelProps } from 'types/frontend';

const Label: React.FC<LabelProps> = ({ label, className }) => {
  const labelClassName = classNames('label', className ?? '');

  return <label className={labelClassName}>{label}</label>;
};

export default Label;

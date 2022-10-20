import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const FormContent: React.FC<WrapperProps> = ({ children, className }) => {
  const formClassName = classNames('form-content', className ?? '');

  return <div className={formClassName}>{children}</div>;
};

export default FormContent;

import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const FormFooter: React.FC<WrapperProps> = ({ children, className }) => {
  const formClassName = classNames('form-footer', className ?? '');

  return <div className={formClassName}>{children}</div>;
};

export default FormFooter;

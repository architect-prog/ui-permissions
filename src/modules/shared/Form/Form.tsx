import React from 'react';
import classNames from 'classnames';
import { WrapperProps } from 'types/frontend';

const Form: React.FC<WrapperProps> = ({ children, className }) => {
  const formClassName = classNames('form', className ?? '');

  return <form className={formClassName}>{children}</form>;
};

export default Form;

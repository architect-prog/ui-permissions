import React from 'react';
import classNames from 'classnames';
import { FormProps } from 'types/frontend';

const Form: React.FC<FormProps> = ({ title, description, children, className }) => {
  const formClassName = classNames('form', className ?? '');

  return <form className={formClassName}>{children}</form>;
};

export default Form;

import React from 'react';
import classNames from 'classnames';
import { FormProps } from 'types/frontend';

const Form: React.FC<FormProps> = ({ title, description, children, className }) => {
  const formClassName = classNames('form', className ?? '');

  return (
    <form className={formClassName}>
      {title && <h3 className="mb-05">{title}</h3>}
      {description && <p className="form-description mb-05">{description}</p>}
      {children}
    </form>
  );
};

export default Form;

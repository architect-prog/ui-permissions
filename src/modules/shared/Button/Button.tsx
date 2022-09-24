import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from 'types/frontend';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, className } = props;
  const comboClassNames = classNames('base-button', className);

  return (
    <button {...props} type={type ?? 'button'} className={comboClassNames}>
      {children}
    </button>
  );
};

export default Button;

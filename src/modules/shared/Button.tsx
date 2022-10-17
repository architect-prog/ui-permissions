import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from 'types/frontend';

const Button: React.FC<ButtonProps> = ({ className, children, type, title, ...props }) => {
  const comboClassNames = classNames('button', className);

  return (
    <button {...props} className={comboClassNames} type={type}>
      {children ?? title}
    </button>
  );
};

export default Button;

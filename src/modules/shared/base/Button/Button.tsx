import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from 'types/frontend';

const Button: React.FC<ButtonProps> = (props) => {
  const { children, type, className, title } = props;
  const comboClassNames = classNames('button', className);

  return (
    <button {...props} type={type ?? 'button'} className={comboClassNames}>
      {children ?? title}
    </button>
  );
};

export default Button;

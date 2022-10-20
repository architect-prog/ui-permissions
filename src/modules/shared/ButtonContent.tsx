import React from 'react';
import classNames from 'classnames';
import { ButtonContentProps } from 'types/frontend';

const ButtonContent: React.FC<ButtonContentProps> = ({ className, children }) => {
  const buttonContentClassNames = classNames('button-content', className);

  return <div className={buttonContentClassNames}>{children}</div>;
};

export default ButtonContent;

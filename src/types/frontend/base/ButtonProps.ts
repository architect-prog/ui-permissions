import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  type?: 'submit' | 'button';
};

export default ButtonProps;

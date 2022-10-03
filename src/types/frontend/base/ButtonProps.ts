import React from 'react';

export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  type?: 'submit' | 'button';
}

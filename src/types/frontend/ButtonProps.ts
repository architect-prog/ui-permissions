import React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  title?: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
}

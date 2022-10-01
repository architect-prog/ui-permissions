import React from 'react';
import { InputProps } from 'types/frontend';

const Input: React.FC<InputProps> = (props) => {
  const { type, value, label, onChange, className } = props;
  return (
    <input className={className} type={type} title={label} onChange={onChange} value={value} />
  );
};

export default Input;

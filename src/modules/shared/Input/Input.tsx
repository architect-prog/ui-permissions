import React from 'react';
import { CheckboxProps } from 'types/frontend';

const Input: React.FC<CheckboxProps> = (props) => {
  const { value, label, onChange } = props;
  return <input type="checkbox" onChange={onChange} checked={value} />;
};

export default Input;

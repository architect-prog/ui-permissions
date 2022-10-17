import classNames from 'classnames';
import React from 'react';
import { InputProps } from 'types/frontend';

const Input: React.FC<InputProps> = ({ type, value, placeholder, title, onChange, className }) => {
  const comboClassNames = classNames('input', className);

  return (
    <>
      <input
        className={comboClassNames}
        type={type}
        title={title}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;

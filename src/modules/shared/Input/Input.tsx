import classNames from 'classnames';
import React from 'react';
import { InputProps } from 'types/frontend';

const Input: React.FC<InputProps> = ({
  type,
  value,
  label,
  labelClassName,
  placeholder,
  title,
  onChange,
  className,
}) => {
  const comboClassNames = classNames('base-input', className);

  return (
    <>
      {label && (
        <label className={labelClassName}>
          <b>{label}</b>
        </label>
      )}
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

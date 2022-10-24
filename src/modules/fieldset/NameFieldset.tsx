import React from 'react';
import { Input, Label } from 'modules/shared';
import { NameFieldsetProps } from 'types/frontend';
import classNames from 'classnames';

const NameFieldset: React.FC<NameFieldsetProps> = ({
  value,
  label,
  placeholder,
  isValid,
  validationErrors,
  onChange,
}) => {
  const labelStyle = classNames('label-bold', isValid ? '' : 'label-error');
  const inputStyle = classNames('w-100', isValid ? '' : 'input-error');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    onChange(name);
  };

  return (
    <div className="mt-1">
      <Label className={labelStyle}>{label}</Label>
      <Input className={inputStyle} type="text" value={value} placeholder={placeholder} onChange={handleChange} />
      {!isValid && <Label className="label-error">{validationErrors?.join(' ')}</Label>}
    </div>
  );
};

export default NameFieldset;

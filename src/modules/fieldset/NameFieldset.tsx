import React, { useState } from 'react';
import { Input, Label } from 'modules/shared';
import { NameFieldsetProps } from 'types/frontend';
import classNames from 'classnames';

const NameFieldset: React.FC<NameFieldsetProps> = ({ isValid, validationErrors, label, placeholder, onChange }) => {
  const [name, setName] = useState<string>('');
  const labelStyle = classNames('label-bold', isValid ? '' : 'label-error');
  const inputStyle = classNames('w-100', isValid ? '' : 'input-error');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    onChange(name);
  };

  return (
    <>
      <Label className={labelStyle}>{label}</Label>
      <Input className={inputStyle} type="text" value={name} placeholder={placeholder} onChange={handleChange} />
      {!isValid && <Label className="label-error">{validationErrors?.join(' ')}</Label>}
    </>
  );
};

export default NameFieldset;

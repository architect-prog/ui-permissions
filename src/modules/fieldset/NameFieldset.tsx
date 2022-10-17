import React, { useState } from 'react';
import { Input, Label } from 'modules/shared';
import { NameFieldsetProps } from 'types/frontend';

const NameFieldset: React.FC<NameFieldsetProps> = ({ label, placeholder, onChange }) => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    onChange(name);
  };

  return (
    <div>
      <Label label={label}></Label>
      <Input type="text" value={name} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default NameFieldset;

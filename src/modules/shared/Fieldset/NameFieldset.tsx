import React, { useState } from 'react';
import { Input } from 'modules/shared';

type NameFieldsetProps = {
  label: string;
  placeholder: string;
  onChange: (name: string) => void;
};

const NameFieldset: React.FC<NameFieldsetProps> = ({ label, placeholder, onChange }) => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    onChange(name);
  };

  return (
    <Input
      type="text"
      value={name}
      label={label}
      className=""
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default NameFieldset;

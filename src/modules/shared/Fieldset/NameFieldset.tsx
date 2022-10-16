import React, { useState } from 'react';
import { Input } from 'modules/shared';

type NameFieldsetProps = {
  onChange: (name: string) => void;
};

const NameFieldset: React.FC<NameFieldsetProps> = ({ onChange }) => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
    onChange(name);
  };

  return (
    <Input
      placeholder="Enter role name"
      label="Enter role name"
      type="text"
      value={name}
      onChange={handleChange}
    />
  );
};

export default NameFieldset;

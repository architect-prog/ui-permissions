import React, { useState } from 'react';
import { Label, TextArea } from 'modules/shared';

type DescriptionFieldsetProps = {
  label: string;
  placeholder: string;
  onChange: (name: string) => void;
};

const DescriptionFieldset: React.FC<DescriptionFieldsetProps> = ({ label, placeholder, onChange }) => {
  const [name, setName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.value;
    setName(name);
    onChange(name);
  };

  return (
    <div>
      <Label>{label}</Label>
      <TextArea value={name} placeholder={placeholder} onChange={handleChange}></TextArea>
    </div>
  );
};

export default DescriptionFieldset;

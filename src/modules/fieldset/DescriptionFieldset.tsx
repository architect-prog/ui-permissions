import React, { useState } from 'react';
import { Label, TextArea } from 'modules/shared';

type DescriptionFieldsetProps = {
  label: string;
  placeholder: string;
  onChange: (name: string) => void;
};

const DescriptionFieldset: React.FC<DescriptionFieldsetProps> = ({ label, placeholder, onChange }) => {
  const [description, setDescription] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.value;
    setDescription(name);
    onChange(name);
  };

  return (
    <>
      <Label className="label-bold">{label}</Label>
      <TextArea className="w-100" value={description} placeholder={placeholder} onChange={handleChange}></TextArea>
    </>
  );
};

export default DescriptionFieldset;

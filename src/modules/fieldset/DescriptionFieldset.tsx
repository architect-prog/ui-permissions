import React from 'react';
import { Label, TextArea } from 'modules/shared';
import { DescriptionFieldsetProps } from 'types/frontend';

const DescriptionFieldset: React.FC<DescriptionFieldsetProps> = ({ value, label, placeholder, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const placeholder = event.target.value;
    onChange(placeholder);
  };

  return (
    <div className="mt-1">
      <Label className="label-bold">{label}</Label>
      <TextArea className="w-100" value={value} placeholder={placeholder} onChange={handleChange}></TextArea>
    </div>
  );
};

export default DescriptionFieldset;

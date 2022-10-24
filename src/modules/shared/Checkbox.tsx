import React from 'react';
import { CheckboxProps } from 'types/frontend';

const Checkbox: React.FC<CheckboxProps> = ({ id, value, label, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input id={id} type="checkbox" onChange={handleChange} checked={value} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

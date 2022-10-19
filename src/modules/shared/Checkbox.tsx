import React, { useState } from 'react';
import { CheckboxProps } from 'types/frontend';

const Checkbox: React.FC<CheckboxProps> = ({ value, label, onChange }) => {
  const [checked, setChecked] = useState<boolean>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" onChange={handleChange} checked={checked} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;

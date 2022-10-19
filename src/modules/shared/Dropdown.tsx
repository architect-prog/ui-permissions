import React from 'react';
import { CheckboxProps } from 'types/frontend';

const Dropdown: React.FC<CheckboxProps> = ({ value, label, onChange }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default Dropdown;

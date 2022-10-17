import React from 'react';
import { CheckboxProps } from 'types/frontend';

const Dropdown: React.FC<CheckboxProps> = (props) => {
  const { value, label, onChange } = props;
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" onChange={onChange} checked={value} />
        {label}
      </label>
    </div>
  );
};

export default Dropdown;

import classNames from 'classnames';
import React from 'react';
import { TextAreaProps } from 'types/frontend';

const TextArea: React.FC<TextAreaProps> = ({ value, placeholder, title, className, onChange }) => {
  const textAreaClassName = classNames('textarea', className);

  return (
    <textarea
      title={title}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={textAreaClassName}
    />
  );
};

export default TextArea;

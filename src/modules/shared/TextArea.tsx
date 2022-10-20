import classNames from 'classnames';
import React from 'react';
import { TextAreaProps } from 'types/frontend';

const TextArea: React.FC<TextAreaProps> = ({ value, placeholder, title, className, onChange }) => {
  const textAreaClassName = classNames('textarea', className);

  return (
    <textarea className={textAreaClassName} title={title} value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default TextArea;

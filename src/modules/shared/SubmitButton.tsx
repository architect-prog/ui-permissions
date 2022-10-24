import React, { useCallback } from 'react';
import classNames from 'classnames';
import { SubmitButtonProps } from 'types/frontend';
import Button from './Button';

const SubmitButton: React.FC<SubmitButtonProps> = ({ className, children, onSubmit, validationChecks }) => {
  const buttonClassNames = classNames('button-primary w-30', className ?? '');

  const handleSubmit = useCallback(() => {
    const isSuccess = validationChecks.map((x) => x()).every((x) => x.success);
    if (!isSuccess) {
      return;
    }

    onSubmit();
  }, [validationChecks, onSubmit]);

  return (
    <Button className={buttonClassNames} type="button" onClick={handleSubmit}>
      {children}
    </Button>
  );
};

export default SubmitButton;

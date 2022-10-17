import { useCallback, useState } from 'react';
import { ValidationResult } from 'types/frontend';

type ValidationActions = {
  valid: boolean;
  errorMessages: string[];
  validate: () => ValidationResult;
};

type Validator<T> = {
  errorMessage: string;
  validationFunction: (property: T | undefined) => boolean;
};

const useValidation = <T>(propertyGetter: () => T | undefined, validators: Validator<T>[]): ValidationActions => {
  const [valid, setValid] = useState<boolean>(true);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  const validate = useCallback((): ValidationResult => {
    const property = propertyGetter();
    console.log(property);
    const errorMessages = validators.filter((x) => !x.validationFunction(property)).map((x) => x.errorMessage);

    setValid(errorMessages.length === 0);
    setErrorMessages(errorMessages);

    return {
      success: errorMessages.length === 0,
      errorMessages: errorMessages,
    };
  }, [propertyGetter, validators]);

  return {
    valid: valid,
    errorMessages: errorMessages,
    validate: validate,
  };
};

export default useValidation;

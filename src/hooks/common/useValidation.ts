import { useCallback, useState } from 'react';
import { ValidationResult, Validator } from 'types/frontend';

const useValidation = <T>(
  initialValue: T,
  ...validators: Validator<T>[]
): [
  value: T,
  setValue: (updatedValue: T) => void,
  validationResult: ValidationResult,
  validate: (updatedValue: T) => ValidationResult,
] => {
  const [value, setValue] = useState<T>(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({ success: true, errorMessages: [] });

  const getValidationResult = useCallback(
    (updatedValue: T): ValidationResult => {
      const errorMessages = validators.filter((x) => !x.validationFunction(updatedValue)).map((x) => x.errorMessage);

      return {
        success: errorMessages.length === 0,
        errorMessages: errorMessages,
      };
    },
    [validators],
  );

  const validate = useCallback(
    (updatedValue: T): ValidationResult => {
      const result = getValidationResult(updatedValue);
      setValidationResult(result);

      return result;
    },
    [getValidationResult],
  );

  const setValidatedValue = useCallback(
    (updatedValue: T) => {
      const result = getValidationResult(updatedValue);

      setValidationResult(result);
      setValue(updatedValue);
    },
    [getValidationResult],
  );

  return [value, setValidatedValue, validationResult, validate];
};

export default useValidation;

import { ValidationResult } from 'types/frontend';
import { validationResultFactory } from 'utils';

const nonEmptyValidation = (value: string | undefined, errorMessage: string): ValidationResult => {
  if (value) {
    return validationResultFactory.success();
  }

  return validationResultFactory.error(errorMessage);
};

export default nonEmptyValidation;

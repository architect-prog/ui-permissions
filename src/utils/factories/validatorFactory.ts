import { Validator } from 'types/frontend';

const createValidator = <T>(errorMessage: string, validationFunction: (x: T | undefined) => boolean): Validator<T> => {
  return {
    errorMessage: errorMessage,
    validationFunction: validationFunction,
  };
};

export default createValidator;

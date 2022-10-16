import { ValidationResult } from 'types/frontend';

const validationResultFactory = {
  success: (): ValidationResult => {
    return {
      success: true,
    };
  },
  error: (error: string): ValidationResult => {
    return {
      error: error,
      success: false,
    };
  },
};

export default validationResultFactory;

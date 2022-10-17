import { isNullOrWhiteSpace } from 'utils';

const nonEmptyValidation = (value: string | undefined): boolean => {
  if (isNullOrWhiteSpace(value)) {
    return false;
  }

  return true;
};

export default nonEmptyValidation;

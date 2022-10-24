import { ValidationResult } from './../ValidationResult';
export type SubmitButtonProps = {
  className?: string;
  children: React.ReactNode;
  onSubmit: () => void;
  validationChecks: (() => ValidationResult)[];
};

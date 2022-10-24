export type NameFieldsetProps = {
  value: string;
  label: string;
  placeholder: string;
  isValid: boolean;
  validationErrors: string[];
  onChange: (name: string) => void;
};

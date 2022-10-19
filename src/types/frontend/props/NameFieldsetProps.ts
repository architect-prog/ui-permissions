export type NameFieldsetProps = {
  label: string;
  placeholder: string;
  isValid?: boolean;
  validationErrors?: string[];
  onChange: (name: string) => void;
};

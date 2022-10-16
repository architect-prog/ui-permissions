export type CheckboxProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  label?: string;
  onChange?: () => void;
  value: boolean;
};

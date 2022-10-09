export interface InputProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  name?: string;
  labelClassName?: string;
  value: string | number;
  title?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: 'number' | 'text';
}

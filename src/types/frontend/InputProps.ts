export interface InputProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: 'number' | 'text';
}

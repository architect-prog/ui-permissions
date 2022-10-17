export type InputProps = {
  value: string | number;
  type: 'number' | 'text';
  title?: string;
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

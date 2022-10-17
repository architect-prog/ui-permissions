export type TextAreaProps = {
  value: string;
  title?: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

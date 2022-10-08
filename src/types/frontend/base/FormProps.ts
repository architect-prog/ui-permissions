export type FormProps<T> = {
  title: string;
  data: T;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default FormProps;

import { ReactNode } from 'react';

export type FormProps = {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

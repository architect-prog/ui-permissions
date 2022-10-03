import { ButtonProps } from './base';

export interface NavigateButtonProps extends ButtonProps {
  /* This is a required field to redirect within application pages*/
  to: string;
}

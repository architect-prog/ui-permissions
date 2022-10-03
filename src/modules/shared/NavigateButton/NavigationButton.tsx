import React from 'react';
import { useNavigate } from 'react-router';
import { NavigateButtonProps } from 'types/frontend';
import { Button } from '..';

const NavigationButton: React.FC<NavigateButtonProps> = ({ to, onClick, ...restProps }) => {
  const navigate = useNavigate();

  const onHandleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  return <Button onClick={onHandleClick} {...restProps} />;
};

export default NavigationButton;

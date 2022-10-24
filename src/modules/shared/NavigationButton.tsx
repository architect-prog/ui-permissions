import React from 'react';
import { useNavigate } from 'react-router';
import { NavigateButtonProps } from 'types/frontend';
import { Button } from './';

const NavigationButton: React.FC<NavigateButtonProps> = ({ to, onClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  return <Button {...props} onClick={handleClick} />;
};

export default NavigationButton;

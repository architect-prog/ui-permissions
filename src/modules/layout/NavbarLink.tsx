import React from 'react';
import { NavigationButton } from 'modules/shared';
import { NavbarLinkProps } from 'types/frontend';
import classNames from 'classnames';

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, active, children, handleClick }) => {
  const navLinkClassName = classNames('navbar-item-link', active ? 'navbar-item-link-active' : '');

  return (
    <li className="navbar-item">
      <NavigationButton onClick={handleClick} to={to} className={navLinkClassName}>
        {children}
      </NavigationButton>
    </li>
  );
};

export default NavbarLink;

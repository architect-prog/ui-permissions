import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItemProps } from 'types/frontend/NavbarItemProps';

const NavbarItem: React.FC<NavbarItemProps> = ({ to, title }) => (
  <li>
    <i className="navbar-item__icon"></i>
    <NavLink className={'navbar-item__link'} to={to} title={title}>
      {title}
    </NavLink>
  </li>
);

export default NavbarItem;

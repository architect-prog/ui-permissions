import React from 'react';
import { routes } from 'appConstants';
import { NavbarItem } from './NavbarItem';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavbarItem title="Applications" to={routes.dashboard.applications} />
      <NavbarItem title="Permissions" to={routes.dashboard.permissions} />
      <NavbarItem title="Roles" to={routes.dashboard.roles} />
    </nav>
  );
};

export default Navbar;

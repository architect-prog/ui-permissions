import paths from 'appConstants/paths';
import React from 'react';
import { NavbarItem } from './NavbarItem';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <NavbarItem title="Applications" to={paths.applications} key={1} />
      <NavbarItem title="Permissions" to={paths.permissions} key={2} />
      <NavbarItem title="Areas" to={paths.areas} key={3} />
      <NavbarItem title="Roles" to={paths.roles} key={4} />
    </nav>
  );
};

export default Navbar;

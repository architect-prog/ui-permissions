import paths from 'constants/paths';
import React from 'react';
import { NavbarItem } from './NavbarItem';

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarItem title="Applications" to={paths.applications} key={1} />
      <NavbarItem title="Permissions" to={paths.permissions} key={1} />
      <NavbarItem title="Areas" to={paths.areas} key={1} />
      <NavbarItem title="Roles" to={paths.roles} key={1} />
    </>
  );
};

export default Navbar;

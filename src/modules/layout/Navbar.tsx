import React, { useState } from 'react';
import { routes } from 'appConstants';
import { HiSquares2X2 } from 'react-icons/hi2';
import { BsShieldFill } from 'react-icons/bs';
import { ButtonContent } from 'modules/shared';
import NavbarLink from './NavbarLink';

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const handleNavLinkClick = (id: number) => {
    setActiveId(id);
  };

  const navLinks = [
    {
      to: routes.dashboard.applications,
      children: (
        <ButtonContent>
          <HiSquares2X2 className="icon mr-05" />
          Applications
        </ButtonContent>
      ),
    },
    {
      to: routes.dashboard.roles,
      children: (
        <ButtonContent>
          <BsShieldFill className="icon mr-05" />
          Roles
        </ButtonContent>
      ),
    },
  ];

  return (
    <nav className="navbar">
      {navLinks.map((x, i) => (
        <NavbarLink key={i} to={x.to} active={activeId == i} handleClick={() => handleNavLinkClick(i)}>
          {x.children}
        </NavbarLink>
      ))}
    </nav>
  );
};

export default Navbar;

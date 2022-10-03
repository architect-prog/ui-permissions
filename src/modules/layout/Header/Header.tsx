import { Button } from 'modules/shared';
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content px-1 py-07">
        <div className="header-item header-logo">
          <FaShieldAlt />
        </div>
        <div className="header-item text-md pl-05">Access && Permissions</div>{' '}
        <Button className="header-item ">
          <IoSettings />
        </Button>
      </div>
    </header>
  );
};

export default Header;

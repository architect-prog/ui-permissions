import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content px-1 py-07">
        <div className="header-item header-logo">
          <FaShieldAlt />
        </div>
        <div className="header-item text-md pl-05">Access && Permissions</div>
      </div>
    </header>
  );
};

export default Header;

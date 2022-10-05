import { Button } from 'modules/shared';
import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import { IoApps, IoEllipsisVerticalSharp, IoSettings } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content mx-1 my-07">
        <div className="header-item">
          <div className="header-logo">
            <FaShieldAlt />
          </div>
          <div className="text-md ml-05">Access && Permissions</div>
        </div>
        <div className="header-item">
          <Button className="button button-primary text-lg">
            <IoApps />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoEllipsisVerticalSharp />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoSettings />
          </Button>
        </div>
        <div className="header-item">
          <Button className="button button-primary text-lg">
            <IoApps />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoEllipsisVerticalSharp />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoSettings />
          </Button>
        </div>
        <div className="header-item">
          <Button className="button button-primary text-lg">
            <IoApps />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoEllipsisVerticalSharp />
          </Button>
          <Button className="button-primary text-lg ml-1">
            <IoSettings />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

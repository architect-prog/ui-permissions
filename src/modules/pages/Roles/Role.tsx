import React from 'react';
import { RoleProps } from 'types/frontend/RoleProps';
import { Link } from 'react-router-dom';
import { paths } from 'appConstants';

const Role: React.FC<RoleProps> = ({ id, name }) => {
  return (
    <div className="role">
      <div className="role-name">
        <Link to={paths.updateRole(id)}>{name}</Link>
      </div>
    </div>
  );
};

export default Role;

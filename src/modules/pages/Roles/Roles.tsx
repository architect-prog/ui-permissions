import React from 'react';
import getRoleColor from 'utils/factories/getRoleColor';
import { Button } from 'modules/shared';

const Roles: React.FC = () => {
  return (
    <div className="roles">
      Roles
      {['Pidor', 'Client', 'Adviser', 'Administrator', 'God'].map((role, i) => (
        <Button
          className="client-button"
          style={{ backgroundColor: getRoleColor(i) }}
          title={role.toLowerCase()}
        >
          {role}
        </Button>
      ))}
    </div>
  );
};

export default Roles;

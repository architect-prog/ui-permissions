import React from 'react';
import { NavigationButton } from 'modules/shared';
import { routes } from 'appConstants';
import { useRoles } from 'hooks';
import RoleRow from './RoleRow';

const Roles: React.FC = () => {
  const { rolesCollection } = useRoles();

  return (
    <div className="roles p-2">
      <h3 className="mb-05">Roles Page</h3>
      <div className="roles-description mb-1">
        A role is a group of permissions that you can assign to principals.
        <br />
        You can create a role and add permissions to it, or copy an existing role and adjust its
        permissions.
      </div>
      <div className="d-flex justify-content-center mb-1">
        <NavigationButton
          to={routes.dashboard.createRole}
          title="Create role"
          className="btn-create"
        />
      </div>
      <div className="d-flex justify-content-center">
        <table className="roles-table w-80 p-1">
          <thead>
            <tr>
              <th className="text-align-left">Name</th>
              <th className="text-align-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rolesCollection.items.map((x) => (
              <RoleRow key={x.id} id={x.id} name={x.name}></RoleRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, NavigationButton } from 'modules/shared';
import { paths } from 'appConstants';
import Role from './Role';
import { useRoles } from 'modules/hooks';

const Roles: React.FC = () => {
  const { rolesCollection, deleteRole } = useRoles();

  return (
    <div className="roles">
      <div className="">
        Roles. A role is a group of permissions that you can assign to principals. You can create a
        role and add permissions to it, or copy an existing role and adjust its permissions.
      </div>
      <div className="roles-header">
        <NavigationButton
          to={paths.createRole}
          title="Create role"
          className="role-create-action"
        />
      </div>
      <div className="roles-view">
        {rolesCollection.items.map((role) => (
          <div key={role.id} className="row">
            <Role id={role.id} name={role.name}></Role>
            <div className="role-actions">
              <NavigationButton to={paths.updateRole(role.id)} className="role-update-action">
                <FaEdit />
              </NavigationButton>
              <Button
                onClick={async () => {
                  await deleteRole(role.id);
                }}
                className="role-delete-action"
              >
                <FaTrash />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roles;

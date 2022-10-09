import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, NavigationButton } from 'modules/shared';
import { paths } from 'appConstants';
import { useRoles } from 'hooks';

const Roles: React.FC = () => {
  const { rolesCollection, deleteRole } = useRoles();

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
        <NavigationButton to={paths.createRole} title="Create role" className="btn-create" />
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
            {rolesCollection.items.map((roles) => (
              <tr>
                <td>{roles.name}</td>
                <td>
                  <NavigationButton to={paths.updateRole(roles.id)} className="btn-update">
                    <FaEdit />
                  </NavigationButton>
                  <Button
                    onClick={async () => {
                      await deleteRole(roles.id);
                    }}
                    className="btn-delete ml-2"
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;

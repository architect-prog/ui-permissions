import React, { useCallback } from 'react';
import { routes } from 'appConstants';
import { Button, NavigationButton } from 'modules/shared';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useRoles } from 'hooks';
import { RoleProps } from 'types/frontend';

const Role: React.FC<RoleProps> = ({ id, name }) => {
  const { deleteRole } = useRoles();

  const handleDelete = useCallback(async () => {
    await deleteRole(id);
  }, [deleteRole, id]);

  return (
    <tr>
      <td>{name}</td>
      <td>
        <NavigationButton to={routes.dashboard.updateRole(id)} className="btn-update">
          <FaEdit />
        </NavigationButton>
        <Button onClick={handleDelete} className="btn-delete ml-2">
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
};

export default Role;

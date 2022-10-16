import React, { useCallback } from 'react';
import { paths } from 'appConstants';
import { Button, NavigationButton } from 'modules/shared';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useRoles } from 'hooks';

type RoleRowProps = {
  id: number;
  name: string;
};

const RoleRow: React.FC<RoleRowProps> = ({ id, name }) => {
  const { deleteRole } = useRoles();

  const handleDelete = useCallback(async () => {
    await deleteRole(id);
  }, [deleteRole, id]);

  return (
    <tr>
      <td>{name}</td>
      <td>
        <NavigationButton to={paths.updateRole(id)} className="btn-update">
          <FaEdit />
        </NavigationButton>
        <Button onClick={handleDelete} className="btn-delete ml-2">
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
};

export default RoleRow;

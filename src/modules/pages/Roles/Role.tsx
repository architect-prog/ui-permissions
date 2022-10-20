import React, { useCallback } from 'react';
import { routes } from 'appConstants';
import { useRoles } from 'hooks';
import { RoleProps } from 'types/frontend';
import { Button, ButtonContent, NavigationButton } from 'modules/shared';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';

const Role: React.FC<RoleProps> = ({ id, name }) => {
  const { deleteRole } = useRoles();

  const handleDelete = useCallback(async () => {
    await deleteRole(id);
  }, [deleteRole, id]);

  return (
    <tr className="role">
      <td>{name}</td>
      <td>
        <NavigationButton className="button-warning" to={routes.dashboard.updateRole(id)}>
          <ButtonContent>
            Update role <RiEdit2Fill className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <Button className="button-danger ml-05" onClick={handleDelete}>
          <ButtonContent>
            Delete role <RiDeleteBin2Fill className="icon ml-03" />
          </ButtonContent>
        </Button>
      </td>
    </tr>
  );
};

export default Role;

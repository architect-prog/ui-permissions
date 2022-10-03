import React from 'react';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, NavigationButton } from 'modules/shared';
import { RolesService } from 'services';
import { paths } from 'appConstants';
import Role from './Role';

const Roles: React.FC = () => {
  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  return (
    <div className="roles">
      <div className="roles-header">
        <NavigationButton
          to={paths.createRole}
          title="Create role"
          className="role-create-action"
        />
      </div>
      <div className="roles-view">
        {rolesCollection.items.map((role) => (
          <div className="row">
            <Role id={role.id} name={role.name}></Role>
            <div className="role-actions">
              <NavigationButton to={paths.updateRole(role.id)} className="role-update-action">
                <FaEdit />
              </NavigationButton>
              <Button
                onClick={async () => {
                  const { id } = role;
                  await RolesService.delete(id);
                  setRolesCollection((rolesCollection) => {
                    const { items, count } = rolesCollection;
                    const newCollection = {
                      items: items.filter((t) => t.id !== id),
                      count: count - 1,
                    };
                    return newCollection;
                  });
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

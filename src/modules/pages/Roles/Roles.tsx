import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button } from 'modules/shared';
import { RolesService } from 'services';

const Roles: React.FC = () => {
  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  const navigate = useNavigate();

  return (
    <div className="roles">
      <div className="roles-header">
        <Button
          title="Create role"
          className="role-create-action"
          onClick={() => {
            const path = `/roles/create`;
            navigate(path);
          }}
        ></Button>
      </div>
      <div className="roles-view">
        {rolesCollection.items.map((role, i) => (
          <div className="row">
            <div className="role">
              <div className="role-name">
                <Link key={`role-${i}`} to={`update/${role.id}`}>
                  {role.name}
                </Link>
              </div>
            </div>
            <div className="role-actions">
              <Button
                onClick={() => {
                  const path = `/roles/update/${role.id}`;
                  navigate(path);
                }}
                className="role-update-action"
              >
                <FaEdit />
              </Button>
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

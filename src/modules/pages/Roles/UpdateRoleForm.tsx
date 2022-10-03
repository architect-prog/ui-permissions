import { paths } from 'appConstants';
import { Input, NavigationButton } from 'modules/shared';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { RolesService } from 'services';
import { roleAtom, rolesAtom } from 'store/recoil/atoms';
import { RoleResponse, UpdateRoleRequest } from 'types/api';

const CreateRoleForm: React.FC = () => {
  const { id } = useParams();
  const roleId = Number.parseInt(id ?? '0');

  const [, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  const [atomRole, setAtomRole] = useRecoilState(roleAtom(roleId)) ?? [];
  const [name, setName] = useState<string>(atomRole.name);

  const handleOnRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };

  const handleOnUpdateButton = useCallback(async () => {
    const request: UpdateRoleRequest = {
      name: name,
    };
    await RolesService.update(roleId, request);
    setAtomRole({
      id: roleId,
      name: name,
    });
    setRolesCollection((rolesCollection) => {
      const { items, count } = rolesCollection;
      const filteredItems = items.filter((t) => t.id !== roleId);
      const role: RoleResponse = {
        id: roleId,
        name: name,
      };
      const newCollection = {
        items: [...filteredItems, role],
        count: count,
      };
      return newCollection;
    });
  }, [name, roleId, setAtomRole, setRolesCollection]);

  return (
    <div className="update-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="update-role-form__input"
        type={'text'}
        value={name}
        label={'update-role'}
        key={'role-key'}
        onChange={handleOnRoleChange}
      />
      <NavigationButton
        to={paths.roles}
        className="update-role-form__submit-button"
        onClick={handleOnUpdateButton}
      >
        Update role
      </NavigationButton>
    </div>
  );
};

export default CreateRoleForm;

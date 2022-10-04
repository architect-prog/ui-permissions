import { paths } from 'appConstants';
import { Input, NavigationButton } from 'modules/shared';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RolesService } from 'services';
import { rolesAtom } from 'store/recoil/atoms';
import { roleSelector } from 'store/recoil/selectors';
import { RoleResponse, UpdateRoleRequest } from 'types/api';

const UpdateRoleForm: React.FC = () => {
  const { id } = useParams();
  const roleId = Number.parseInt(id ?? '0');
  const [role, setRole] = useState<RoleResponse>();

  useEffect(() => {
    const fetchAsync = async () => {
      const result = await RolesService.get(roleId);
      setRole(result);
    };
    fetchAsync();
  }, [roleId]);

  const [, setRolesCollection] = useRecoilState(rolesAtom) ?? [];

  const handleOnRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole({ id: role?.id ?? 0, name: event?.target.value });
  };

  const handleOnUpdateButton = useCallback(async () => {
    const request: UpdateRoleRequest = {
      name: role?.name ?? '',
    };

    await RolesService.update(roleId, request);
    if (!role) {
      return;
    }
    setRolesCollection((rolesCollection) => {
      const { items, count } = rolesCollection;
      const filteredItems = items.filter((t) => t.id !== roleId);

      const newCollection = {
        items: [...filteredItems, role],
        count: count,
      };
      return newCollection;
    });
  }, [role, roleId, setRolesCollection]);

  return (
    <div className="update-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="update-role-form__input"
        type={'text'}
        value={role?.name ?? ''}
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

export default UpdateRoleForm;

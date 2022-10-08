import { paths } from 'appConstants';
import { useRoles } from 'modules/hooks';
import { Input, NavigationButton } from 'modules/shared';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { rolesService } from 'services';
import { RoleResponse, UpdateRoleRequest } from 'types/api';

const UpdateRoleForm: React.FC = () => {
  const { id } = useParams();
  const roleId = Number.parseInt(id ?? '0');

  const { updateRole } = useRoles();
  const [role, setRole] = useState<RoleResponse>();
  const [request, setRequest] = useState<UpdateRoleRequest>({
    name: '',
  });

  useEffect(() => {
    const fetchAsync = async () => {
      const result = await rolesService.get(roleId);
      setRole(result);
    };
    fetchAsync();
  }, [roleId]);

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRequest({ name: event.target.value });
  };

  const handleOnUpdateButton = useCallback(async () => {
    await updateRole(roleId, request);
  }, [roleId, request, updateRole]);

  return (
    <div className="update-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="update-role-form__input"
        type={'text'}
        value={request?.name ?? ''}
        label={'update-role'}
        key={'role-key'}
        onChange={handleOnNameChange}
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

import React, { useCallback, useState } from 'react';
import { paths } from 'appConstants';
import { useRoles } from 'modules/hooks';
import { Input, NavigationButton } from 'modules/shared';
import { useParams } from 'react-router';
import { UpdateRoleRequest } from 'types/api';

const UpdateRoleForm: React.FC = () => {
  const { id } = useParams();
  const roleId = Number.parseInt(id ?? '0');

  const { updateRole } = useRoles();
  const [request, setRequest] = useState<UpdateRoleRequest>({
    name: '',
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRequest({ name: event.target.value });
  };

  const handleOnUpdateButton = useCallback(async () => {
    await updateRole(roleId, request);
  }, [roleId, request, updateRole]);

  return (
    <form className="update-role-form m-2 p-2">
      <h3 className="mb-05">Update role form</h3>
      <p className="role-form-description mb-1">
        To update <b>role</b> you need to fill name field in this form.
      </p>
      <Input
        placeholder="Enter role name"
        label={'Enter role name'}
        className="mb-1"
        type={'text'}
        value={request.name}
        onChange={handleOnNameChange}
      />
      <div className="footer d-flex justify-content-end align-items-end">
        <NavigationButton
          to={paths.roles}
          onClick={handleOnUpdateButton}
          className="btn-update w-40"
        >
          Update role
        </NavigationButton>
      </div>
    </form>
  );
};

export default UpdateRoleForm;

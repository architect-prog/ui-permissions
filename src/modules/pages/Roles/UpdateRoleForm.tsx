import React, { useCallback, useState } from 'react';
import { params, paths } from 'appConstants';
import { useParamNumber, useRoles } from 'hooks';
import { Form, NameFieldset, NavigationButton } from 'modules/shared';
import { UpdateRoleRequest } from 'types/api';

const UpdateRoleForm: React.FC = () => {
  const { updateRole } = useRoles();
  const [request, setRequest] = useState<UpdateRoleRequest>();
  const roleId = useParamNumber(params.roleId);

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleSubmit = useCallback(async () => {
    if (request) {
      await updateRole(roleId, request);
    }
  }, [roleId, request, updateRole]);

  return (
    <Form
      title="Update role form"
      description="To update role you need to fill name field in this form."
      className="update-role-form m-2 p-2"
    >
      <NameFieldset onChange={handleNameChange}></NameFieldset>
      <NavigationButton className="btn-update w-40" to={paths.roles} onClick={handleSubmit}>
        Update role
      </NavigationButton>
    </Form>
  );
};

export default UpdateRoleForm;

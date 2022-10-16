import React, { useCallback, useState } from 'react';
import { params } from 'appConstants';
import { useParamNumber, useRoles } from 'hooks';
import { Button, Form, NameFieldset } from 'modules/shared';
import { UpdateRoleRequest } from 'types/api';

const UpdateRoleForm: React.FC = () => {
  const { updateRole } = useRoles();
  const roleId = useParamNumber(params.roleId);
  const [request, setRequest] = useState<UpdateRoleRequest>({
    name: '',
  });

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleSubmit = useCallback(async () => {
    await updateRole(roleId, request);
  }, [roleId, request, updateRole]);

  return (
    <Form
      title="Update role form"
      description="To update role you need to fill name field in this form."
      className="update-role-form m-2 p-2"
    >
      <NameFieldset
        label="Enter role name"
        placeholder="Enter role name..."
        onChange={handleNameChange}
      />
      <Button className="btn-update w-40" type="button" onClick={handleSubmit}>
        Update role
      </Button>
    </Form>
  );
};

export default UpdateRoleForm;

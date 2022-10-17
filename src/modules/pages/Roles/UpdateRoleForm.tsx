import React, { useCallback, useState } from 'react';
import { params } from 'appConstants';
import { useParamNumber, useRoles, useValidation } from 'hooks';
import { UpdateRoleRequest } from 'types/api';
import { Button, Form } from 'modules/shared';
import { NameFieldset } from 'modules/fieldset';
import { nonEmptyValidation } from 'validation';

const UpdateRoleForm: React.FC = () => {
  const { updateRole } = useRoles();
  const roleId = useParamNumber(params.roleId);
  const [request, setRequest] = useState<UpdateRoleRequest>({
    name: '',
  });

  const { valid, errorMessages, validate } = useValidation(
    () => request.name,
    [
      {
        errorMessage: 'Please provide a role name.',
        validationFunction: nonEmptyValidation,
      },
    ],
  );

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
    validate();
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
      <NameFieldset label="Enter role name" placeholder="Enter role name..." onChange={handleNameChange}></NameFieldset>
      {valid && 'pidor'}
      <Button className="btn-update w-40" type="button" onClick={handleSubmit}>
        Update role
      </Button>
    </Form>
  );
};

export default UpdateRoleForm;

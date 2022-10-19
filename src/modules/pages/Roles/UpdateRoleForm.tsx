import React, { useCallback } from 'react';
import { params } from 'appConstants';
import { useParamNumber, useRoles, useValidation } from 'hooks';
import { UpdateRoleRequest } from 'types/api';
import { Button, Form } from 'modules/shared';
import { NameFieldset } from 'modules/fieldset';
import { nonEmptyValidation } from 'validation';
import createValidator from 'utils/factories/validatorFactory';

const UpdateRoleForm: React.FC = () => {
  const { updateRole } = useRoles();
  const roleId = useParamNumber(params.roleId);
  const [name, setName, nameValidationResult] = useValidation<string>(
    '',
    createValidator('Please provide a role name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = useCallback(async () => {
    if (nameValidationResult.success) {
      const request: UpdateRoleRequest = {
        name: name,
      };

      await updateRole(roleId, request);
    }
  }, [roleId, name, nameValidationResult, updateRole]);

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
        isValid={nameValidationResult.success}
        validationErrors={nameValidationResult.errorMessages}
      ></NameFieldset>
      <Button className="btn-update w-40" type="button" onClick={handleSubmit}>
        Update role
      </Button>
    </Form>
  );
};

export default UpdateRoleForm;

import React, { useCallback } from 'react';
import { CreateRoleRequest } from 'types/api';
import { routes } from 'appConstants';
import { Form, NavigationButton } from 'modules/shared';
import { useRoles, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';

const CreateRoleForm: React.FC = () => {
  const { createRole } = useRoles();
  const [name, setName, nameValidationResult] = useValidation<string>(
    '',
    validatorFactory.create('Please provide a role name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = useCallback(async () => {
    if (!nameValidationResult.success) {
      return;
    }

    const request: CreateRoleRequest = {
      name: name,
    };

    await createRole(request);
  }, [name, nameValidationResult, createRole]);

  return (
    <Form
      title="Create role form"
      description="To create role you need to fill name field in this form."
      className="create-roles-form m-2 p-2"
    >
      <NameFieldset
        label="Enter role name"
        placeholder="Enter role name..."
        onChange={handleNameChange}
        isValid={nameValidationResult.success}
        validationErrors={nameValidationResult.errorMessages}
      ></NameFieldset>
      <NavigationButton className="btn-create w-40" to={routes.dashboard.roles} onClick={handleSubmit}>
        Add role
      </NavigationButton>
    </Form>
  );
};

export default CreateRoleForm;

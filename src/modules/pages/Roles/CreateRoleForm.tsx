import React, { useCallback } from 'react';
import { CreateRoleRequest } from 'types/api';
import { useRoles, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';
import { routes } from 'appConstants';
import { useNavigate } from 'react-router';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';

const CreateRoleForm: React.FC = () => {
  const navigate = useNavigate();
  const { createRole } = useRoles();
  const [name, setName, nameValidationResult, validateCurrentName] = useValidation<string>(
    '',
    validatorFactory.create('Please provide a role name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = useCallback(async () => {
    const result = validateCurrentName();
    if (result.success) {
      const request: CreateRoleRequest = {
        name: name,
      };

      if (await createRole(request)) {
        navigate(routes.dashboard.roles);
      }
    }
  }, [name, createRole, navigate, validateCurrentName]);

  return (
    <Form className="role-form">
      <FormContent>
        <Title>Create role</Title>
        <Description>To create role you need to fill name field. Name is required for role.</Description>
        <hr />
        <NameFieldset
          label="Name*"
          placeholder="Enter role name..."
          onChange={handleNameChange}
          isValid={nameValidationResult.success}
          validationErrors={nameValidationResult.errorMessages}
        ></NameFieldset>
      </FormContent>
      <FormFooter>
        <Button className="button-primary w-30" type="button" onClick={handleSubmit}>
          Create role
        </Button>
      </FormFooter>
    </Form>
  );
};

export default CreateRoleForm;

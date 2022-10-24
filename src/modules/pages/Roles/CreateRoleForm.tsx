import React, { useCallback } from 'react';
import { CreateRoleRequest } from 'types/api';
import { useRoles, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { toaster, validatorFactory } from 'utils';
import { containsData, required } from 'validation';
import { routes } from 'appConstants';
import { useNavigate } from 'react-router';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';

const CreateRoleForm: React.FC = () => {
  const navigate = useNavigate();
  const { createRole } = useRoles();
  const [name, setName, validationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Role name is required!', required),
    validatorFactory.create('Role name should contain not only whitespace characters!', containsData),
  );

  const handleSubmit = useCallback(async () => {
    const request: CreateRoleRequest = {
      name: name,
    };

    if (await createRole(request)) {
      navigate(routes.dashboard.roles);
      toaster.success('Role successfully created!');
    }
  }, [name, createRole, navigate]);

  return (
    <Form className="role-form">
      <FormContent>
        <Title>Create role</Title>
        <Description>To create role you need to fill name field. Name is required for role.</Description>
        <hr />
        <NameFieldset
          value={name}
          label="Name*"
          placeholder="Enter role name..."
          onChange={setName}
          isValid={validationResult.success}
          validationErrors={validationResult.errorMessages}
        ></NameFieldset>
      </FormContent>
      <FormFooter>
        <SubmitButton onSubmit={handleSubmit} validationChecks={[() => validateName(name)]}>
          Create role
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default CreateRoleForm;

import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { UpdateRoleRequest } from 'types/api';
import { NameFieldset } from 'modules/fieldset';
import { nonEmptyValidation } from 'validation';
import { validatorFactory } from 'utils';
import { useNavigate } from 'react-router';
import { useParamNumber, useRoles, useValidation } from 'hooks';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';

const UpdateRoleForm: React.FC = () => {
  const { updateRole } = useRoles();
  const navigate = useNavigate();
  const roleId = useParamNumber(params.roleId);
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
      const request: UpdateRoleRequest = {
        name: name,
      };

      if (await updateRole(roleId, request)) {
        navigate(routes.dashboard.roles);
      }
    }
  }, [roleId, name, updateRole, navigate, validateCurrentName]);

  return (
    <Form className="role-form">
      <FormContent>
        <Title>Update role</Title>
        <Description>To update role you need to fill name field. Name is required for role.</Description>
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
        <Button className="button-warning w-30" type="button" onClick={handleSubmit}>
          Update role
        </Button>
      </FormFooter>
    </Form>
  );
};

export default UpdateRoleForm;

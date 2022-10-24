import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { NameFieldset } from 'modules/fieldset';
import { toaster, validatorFactory } from 'utils';
import { useNavigate } from 'react-router';
import { useParamNumber, useRole, useRoles, useValidation } from 'hooks';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';
import { containsData, required } from 'validation';

const UpdateRoleForm: React.FC = () => {
  const navigate = useNavigate();
  const roleId = useParamNumber(params.roleId);
  const { updateRole } = useRoles();

  const [name, setName, validationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Role name is required!', required),
    validatorFactory.create('Role name should contain not only whitespace characters!', containsData),
  );

  useRole(roleId, (x) => {
    setName(x.name);
  });

  const handleSubmit = useCallback(async () => {
    const request = { name: name };
    if (await updateRole(roleId, request)) {
      navigate(routes.dashboard.roles);
      toaster.success('Role successfully updated!');
    }
  }, [roleId, name, updateRole, navigate]);

  return (
    <Form className="role-form">
      <FormContent>
        <Title>Update role</Title>
        <Description>To update role you need to fill name field. Name is required for role.</Description>
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
          Update role
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default UpdateRoleForm;

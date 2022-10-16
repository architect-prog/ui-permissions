import React, { useCallback, useState } from 'react';
import { CreateRoleRequest } from 'types/api';
import { routes } from 'appConstants';
import { Form, NameFieldset, NavigationButton } from 'modules/shared';
import { useRoles } from 'hooks';

const CreateRoleForm: React.FC = () => {
  const { createRole } = useRoles();
  const [request, setRequest] = useState<CreateRoleRequest>();

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleSubmit = useCallback(async () => {
    if (request) {
      await createRole(request);
    }
  }, [request, createRole]);

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
      />
      <NavigationButton
        className="btn-create w-40"
        to={routes.dashboard.roles}
        onClick={handleSubmit}
      >
        Add role
      </NavigationButton>
    </Form>
  );
};

export default CreateRoleForm;

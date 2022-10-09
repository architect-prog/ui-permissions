import React, { useState } from 'react';
import { CreateRoleRequest } from 'types/api';
import { paths } from 'appConstants';
import { Input, NavigationButton } from 'modules/shared';
import { useRoles } from 'hooks';

const CreateRoleForm: React.FC = () => {
  const { createRole } = useRoles();

  const [request, setRequest] = useState<CreateRoleRequest>({
    name: '',
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ name: event.target.value });
  };

  return (
    <form className="create-roles-form m-2 p-2">
      <h3 className="mb-05">Create role form</h3>
      <p className="areas-description mb-1">
        To create <b>role</b> you need to fill name field in this form.
      </p>

      <Input
        placeholder="Enter role name"
        label={'Enter role name'}
        className="mb-1"
        type={'text'}
        value={request.name}
        onChange={handleOnNameChange}
      />
      <div className="footer d-flex justify-content-end align-items-end">
        <NavigationButton
          to={paths.roles}
          onClick={() => createRole(request)}
          className="btn-create w-40"
        >
          Add role
        </NavigationButton>
      </div>
    </form>
  );
};

export default CreateRoleForm;

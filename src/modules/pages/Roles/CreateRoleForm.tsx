import React, { useState } from 'react';
import { CreateRoleRequest } from 'types/api';
import { paths } from 'appConstants';
import { Input, NavigationButton } from 'modules/shared';
import { useRoles } from 'modules/hooks';

const CreateRoleForm: React.FC = () => {
  const { createRole } = useRoles();

  const [request, setRequest] = useState<CreateRoleRequest>({
    name: '',
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ name: event.target.value });
  };

  return (
    <div className="create-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="create-role-form__input"
        type={'text'}
        value={request.name}
        onChange={handleOnNameChange}
      />

      <NavigationButton
        to={paths.roles}
        onClick={() => createRole(request)}
        className="create-role-form__submit-button"
      >
        Add role
      </NavigationButton>
    </div>
  );
};

export default CreateRoleForm;

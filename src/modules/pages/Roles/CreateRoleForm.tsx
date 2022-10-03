import React, { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { CreateRoleRequest } from 'types/api';
import { paths } from 'appConstants';
import { Input, NavigationButton } from 'modules/shared';
import { RolesService } from 'services';

const CreateRoleForm: React.FC = () => {
  const [, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  const [name, setName] = useState<string>('');
  const handleOnRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    setName(event?.target.value);
  };
  const handleOnAddButton = useCallback(async () => {
    const request: CreateRoleRequest = {
      name: name,
    };
    const createdRole = await RolesService.create(request);
    setRolesCollection((rolesCollection) => {
      const { items, count } = rolesCollection;
      const newCollection = {
        items: [...items, createdRole],
        count: count + 1,
      };
      return newCollection;
    });
  }, [name, setRolesCollection]);

  return (
    <div className="create-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="create-role-form__input"
        type={'text'}
        value={name}
        label={'add-role'}
        key={'role-key'}
        onChange={handleOnRoleChange}
      />

      <NavigationButton
        to={paths.roles}
        onClick={handleOnAddButton}
        className="create-role-form__submit-button"
      >
        Add role
      </NavigationButton>
    </div>
  );
};

export default CreateRoleForm;

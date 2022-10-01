import { Button, Input } from 'modules/shared';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { RolesService } from 'services';
import { rolesAtom } from 'store/recoil/atoms';
import { CreateRoleRequest } from 'types/api';

const CreateRoleForm: React.FC = () => {
  const [, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  const [name, setName] = useState<string>('');
  const handleOnRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    setName(event?.target.value);
  };
  const navigate = useNavigate();
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
    const path = `/roles`;
    navigate(path);
  }, [name, navigate, setRolesCollection]);

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

      <Button className="create-role-form__submit-button" onClick={handleOnAddButton}>
        Add role
      </Button>
    </div>
  );
};

export default CreateRoleForm;

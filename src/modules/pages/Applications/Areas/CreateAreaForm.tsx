import React, { useState } from 'react';
import { paths } from 'appConstants';
import { useParamNumber } from 'hooks';
import { useAreas } from 'modules/hooks';
import { Input, NavigationButton } from 'modules/shared';
import { CreateAreaRequest } from 'types/api';

const CreateAreaForm: React.FC = () => {
  const applicationId = useParamNumber('applicationId');
  const { createArea } = useAreas(applicationId);
  const [request, setRequest] = useState<CreateAreaRequest>({
    name: '',
    applicationId: applicationId,
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ name: event.target.value, applicationId: applicationId });
  };

  return (
    <form className="create-area-form m-2 p-2">
      <h3 className="mb-05">Create area form</h3>
      <p className="areas-description mb-1">
        To create <b>area</b> you need to fill name field in this form.
      </p>
      <Input
        label={'Enter area name'}
        placeholder={'Enter area name'}
        className="mb-1"
        type={'text'}
        value={request.name}
        onChange={handleOnNameChange}
      />
      <div className="footer d-flex justify-content-end align-items-end">
        <NavigationButton
          to={paths.areas(applicationId)}
          onClick={() => createArea(request)}
          className="btn-create w-40"
        >
          Create
        </NavigationButton>
      </div>
    </form>
  );
};

export default CreateAreaForm;

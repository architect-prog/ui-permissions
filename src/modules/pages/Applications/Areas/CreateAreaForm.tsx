import React, { useCallback, useState } from 'react';
import { params, routes } from 'appConstants';
import { useAreas, useParamNumber } from 'hooks';
import { Form, NavigationButton } from 'modules/shared';
import { CreateAreaRequest } from 'types/api';
import { NameFieldset } from 'modules/fieldset';

const CreateAreaForm: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);
  const { createArea } = useAreas(applicationId);
  const [request, setRequest] = useState<CreateAreaRequest>({
    name: '',
    applicationId: applicationId,
  });

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleSubmit = useCallback(async () => {
    await createArea(request);
  }, [request, createArea]);

  return (
    <Form
      title="Create area form"
      description="To create area you need to fill name field in this form."
      className="create-area-form m-2 p-2"
    >
      <NameFieldset
        label={'Enter area name'}
        placeholder={'Enter area name'}
        onChange={handleNameChange}
      ></NameFieldset>
      <NavigationButton to={routes.dashboard.areas(applicationId)} onClick={handleSubmit} className="btn-create w-40">
        Create
      </NavigationButton>
    </Form>
  );
};

export default CreateAreaForm;

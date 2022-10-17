import { params, routes } from 'appConstants';
import { useAreas, useParamNumber } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { Form, NavigationButton } from 'modules/shared';
import React, { useCallback, useState } from 'react';
import { UpdateAreaRequest } from 'types/api';

const UpdateAreaForm: React.FC = () => {
  const areaId = useParamNumber(params.areaId);
  const applicationId = useParamNumber(params.applicationId);
  const { updateArea } = useAreas(applicationId);
  const [request, setRequest] = useState<UpdateAreaRequest>({
    name: '',
    applicationId: applicationId,
  });

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleSubmit = useCallback(async () => {
    await updateArea(areaId, request);
  }, [areaId, request, updateArea]);

  return (
    <Form
      title="Update area form"
      description="To update area you need to fill name field in this form."
      className="update-area-form m-2 p-2"
    >
      <NameFieldset
        label={'Enter area name'}
        placeholder={'Enter area name'}
        onChange={handleNameChange}
      ></NameFieldset>
      <NavigationButton to={routes.dashboard.areas(applicationId)} onClick={handleSubmit} className="btn-update w-40">
        Create
      </NavigationButton>
    </Form>
  );
};

export default UpdateAreaForm;

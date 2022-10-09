import { paths } from 'appConstants';
import { useParamNumber } from 'hooks';
import { useAreas } from 'modules/hooks';
import { Input, NavigationButton } from 'modules/shared';
import React, { useState } from 'react';
import { UpdateAreaRequest } from 'types/api';

const UpdateAreaForm: React.FC = () => {
  const applicationId = useParamNumber('applicationId');
  const areaId = useParamNumber('areaId');
  const { updateArea } = useAreas(applicationId);
  const [request, setRequest] = useState<UpdateAreaRequest>({
    name: '',
    applicationId: applicationId,
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ name: event.target.value, applicationId: applicationId });
  };

  return (
    <form className="update-area-form m-2 p-2">
      <h3 className="mb-05">Update area form</h3>
      <p className="areas-description mb-1">
        To update <b>area</b> you need to fill name field in this form.
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
          onClick={async () => await updateArea(areaId, request)}
          className="btn-update w-40"
        >
          Create
        </NavigationButton>
      </div>
    </form>
  );
};

export default UpdateAreaForm;

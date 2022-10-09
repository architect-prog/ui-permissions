import React, { useState } from 'react';
import { useApplications } from 'modules/hooks';
import { UpdateApplicationRequest } from 'types/api';
import { Input, NavigationButton } from 'modules/shared';
import { paths } from 'appConstants';
import { useParamNumber } from 'hooks';

const UpdateApplicationForm: React.FC = () => {
  const applicationId = useParamNumber('applicationId');

  const { updateApplication } = useApplications();
  const [request, setRequest] = useState<UpdateApplicationRequest>({
    name: '',
    description: '',
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ ...request, name: event.target.value });
  };

  const handleOnDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setRequest({ ...request, description: event.target.value });
  };

  return (
    <form className="create-application-form m-2 p-2">
      <h3 className="mb-05">Update application form</h3>
      <p className="application-description mb-1">
        To update <b>application</b> you need to fill name and description fields in this form.
      </p>
      <Input
        label={'Enter application name'}
        placeholder={'Enter application name'}
        className="mb-1"
        type={'text'}
        value={request.name}
        onChange={handleOnNameChange}
      />
      <Input
        label={'Enter description'}
        placeholder={'Enter description'}
        className="mb-1"
        type={'text'}
        value={request.description ?? ''}
        onChange={handleOnDescriptionChange}
      />
      <div className="footer d-flex justify-content-end align-items-end">
        <NavigationButton
          to={paths.applications}
          onClick={async () => await updateApplication(applicationId, request)}
          className="btn-update w-40"
        >
          Update
        </NavigationButton>
      </div>
    </form>
  );
};

export default UpdateApplicationForm;

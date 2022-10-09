import React, { useState } from 'react';
import { paths } from 'appConstants';
import { useApplications } from 'modules/hooks';
import { Input, NavigationButton } from 'modules/shared';
import { CreateApplicationRequest } from 'types/api';

const CreateApplicationForm: React.FC = () => {
  const { createApplication } = useApplications();
  const [request, setRequest] = useState<CreateApplicationRequest>({
    name: '',
    description: '',
  });

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ name: event.target.value });
  };

  const handleOnDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRequest({ ...request, description: event.target.value });
  };

  return (
    <form className="create-application-form m-2 p-2">
      <h3 className="mb-05">Create application form</h3>
      <p className="application-description mb-1">
        To create <b>application</b> you need to fill name and description fields in this form.
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
          onClick={() => createApplication(request)}
          className="btn-create w-40"
        >
          Create
        </NavigationButton>
      </div>
    </form>
  );
};

export default CreateApplicationForm;

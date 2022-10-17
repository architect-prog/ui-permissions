import React, { useCallback, useState } from 'react';
import { useApplications } from 'hooks';
import { UpdateApplicationRequest } from 'types/api';
import { Form, NavigationButton } from 'modules/shared';
import { params, routes } from 'appConstants';
import { useParamNumber } from 'hooks';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';

const UpdateApplicationForm: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);

  const { updateApplication } = useApplications();
  const [request, setRequest] = useState<UpdateApplicationRequest>({
    name: '',
    description: '',
  });

  const handleNameChange = (name: string) => {
    setRequest({ ...request, name: name });
  };

  const handleDescriptionChange = (description: string) => {
    setRequest({ ...request, description: description });
  };

  const handleSubmit = useCallback(async () => {
    await updateApplication(applicationId, request);
  }, [applicationId, request, updateApplication]);

  return (
    <Form
      title="Update application form"
      description="To update application you need to fill name and description fields in this form."
      className="create-application-form m-2 p-2"
    >
      <NameFieldset
        label={'Enter application name'}
        placeholder={'Enter application name'}
        onChange={handleNameChange}
      ></NameFieldset>
      <DescriptionFieldset
        label={'Enter description'}
        placeholder={'Enter description'}
        onChange={handleDescriptionChange}
      ></DescriptionFieldset>
      <NavigationButton to={routes.dashboard.applications} onClick={handleSubmit} className="btn-update w-40">
        Update
      </NavigationButton>
    </Form>
  );
};

export default UpdateApplicationForm;

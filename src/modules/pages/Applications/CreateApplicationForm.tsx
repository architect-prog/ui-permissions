import React, { useCallback, useState } from 'react';
import { routes } from 'appConstants';
import { useApplications } from 'hooks';
import { Form, NavigationButton } from 'modules/shared';
import { CreateApplicationRequest } from 'types/api';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';

const CreateApplicationForm: React.FC = () => {
  const { createApplication } = useApplications();
  const [request, setRequest] = useState<CreateApplicationRequest>({
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
    await createApplication(request);
  }, [request, createApplication]);

  return (
    <Form
      title="Create application form"
      description="To create application you need to fill name and description fields in this form."
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
      <NavigationButton to={routes.dashboard.applications} onClick={handleSubmit} className="btn-create w-40">
        Create
      </NavigationButton>
    </Form>
  );
};

export default CreateApplicationForm;

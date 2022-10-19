import React, { useCallback, useState } from 'react';
import { routes } from 'appConstants';
import { useApplications, useValidation } from 'hooks';
import { Form, NavigationButton } from 'modules/shared';
import { CreateApplicationRequest } from 'types/api';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';

const CreateApplicationForm: React.FC = () => {
  const { createApplication } = useApplications();
  const [description, setDescription] = useState<string>('');
  const [name, setName, nameValidationResult] = useValidation<string>(
    '',
    validatorFactory.create('Please provide a role name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const handleSubmit = useCallback(async () => {
    if (!nameValidationResult.success) {
      return;
    }

    const request: CreateApplicationRequest = {
      name: name,
      description: description,
    };

    await createApplication(request);
  }, [name, description, nameValidationResult, createApplication]);

  return (
    <Form
      title="Create application form"
      description="To create application you need to fill name and description fields in this form."
      className="create-application-form m-2 p-2"
    >
      <NameFieldset
        label="Enter application name"
        placeholder="Enter application name"
        onChange={handleNameChange}
        isValid={nameValidationResult.success}
        validationErrors={nameValidationResult.errorMessages}
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

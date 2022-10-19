import React, { useCallback, useState } from 'react';
import { useApplications, useValidation } from 'hooks';
import { UpdateApplicationRequest } from 'types/api';
import { Form, NavigationButton } from 'modules/shared';
import { params, routes } from 'appConstants';
import { useParamNumber } from 'hooks';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { nonEmptyValidation } from 'validation';
import { validatorFactory } from 'utils';

const UpdateApplicationForm: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);

  const { updateApplication } = useApplications();
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

    const request: UpdateApplicationRequest = {
      name: name,
      description: description,
    };

    await updateApplication(applicationId, request);
  }, [applicationId, name, description, nameValidationResult, updateApplication]);

  return (
    <Form
      title="Update application form"
      description="To update application you need to fill name and description fields in this form."
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
      <NavigationButton to={routes.dashboard.applications} onClick={handleSubmit} className="btn-update w-40">
        Update
      </NavigationButton>
    </Form>
  );
};

export default UpdateApplicationForm;

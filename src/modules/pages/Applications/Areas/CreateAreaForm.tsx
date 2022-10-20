import React, { useCallback, useState } from 'react';
import { params, routes } from 'appConstants';
import { useAreas, useParamNumber, useValidation } from 'hooks';
import { Form, NavigationButton } from 'modules/shared';
import { CreateAreaRequest } from 'types/api';
import { NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';

const CreateAreaForm: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);
  const { createArea } = useAreas(applicationId);
  const [name, setName, nameValidationResult] = useValidation<string>(
    '',
    validatorFactory.create('Please provide a role name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = useCallback(async () => {
    if (!nameValidationResult.success) {
      return;
    }

    const request: CreateAreaRequest = {
      name: name,
      applicationId: applicationId,
    };

    await createArea(request);
  }, [applicationId, name, nameValidationResult, createArea]);

  return (
    <Form
      title="Create area form"
      description="To create area you need to fill name field in this form."
      className="create-area-form m-2 p-2"
    >
      <NameFieldset
        label="Enter area name"
        placeholder="Enter area name"
        onChange={handleNameChange}
        isValid={nameValidationResult.success}
        validationErrors={nameValidationResult.errorMessages}
      ></NameFieldset>
      <NavigationButton
        to={routes.dashboard.areas(applicationId)}
        onClick={handleSubmit}
        className="button-primary w-40"
      >
        Create
      </NavigationButton>
    </Form>
  );
};

export default CreateAreaForm;

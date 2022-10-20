import React, { useCallback, useState } from 'react';
import { routes } from 'appConstants';
import { useApplications, useValidation } from 'hooks';
import { CreateApplicationRequest } from 'types/api';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';
import { useNavigate } from 'react-router';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';

const CreateApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const { createApplication } = useApplications();
  const [description, setDescription] = useState<string>('');
  const [name, setName, nameValidationResult, validateCurrentName] = useValidation<string>(
    '',
    validatorFactory.create('Please provide an application name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const handleSubmit = useCallback(async () => {
    const result = validateCurrentName();
    if (result.success) {
      const request: CreateApplicationRequest = {
        name: name,
        description: description,
      };

      if (await createApplication(request)) {
        navigate(routes.dashboard.applications);
      }
    }
  }, [name, description, createApplication, validateCurrentName, navigate]);

  return (
    <Form className="application-form">
      <FormContent>
        <Title>Create application</Title>
        <Description>To create application you need to fill name field below.</Description>
        <hr />
        <NameFieldset
          label="Name*"
          placeholder="Enter application name..."
          onChange={handleNameChange}
          isValid={nameValidationResult.success}
          validationErrors={nameValidationResult.errorMessages}
        ></NameFieldset>
        <div className="mt-1"></div>
        <DescriptionFieldset
          label="Description"
          placeholder="Enter application description..."
          onChange={handleDescriptionChange}
        ></DescriptionFieldset>
      </FormContent>
      <FormFooter>
        <Button className="button-primary w-30" type="button" onClick={handleSubmit}>
          Create application
        </Button>
      </FormFooter>
    </Form>
  );
};

export default CreateApplicationForm;

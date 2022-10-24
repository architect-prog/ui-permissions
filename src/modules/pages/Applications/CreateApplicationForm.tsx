import React, { useCallback, useState } from 'react';
import { routes } from 'appConstants';
import { useApplications, useValidation } from 'hooks';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { toaster, validatorFactory } from 'utils';
import { containsData, required } from 'validation';
import { useNavigate } from 'react-router';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';

const CreateApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const { createApplication } = useApplications();
  const [description, setDescription] = useState<string>('');
  const [name, setName, nameValidationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Application name is required!', required),
    validatorFactory.create('Application name should contain not only whitespace characters!', containsData),
  );

  const handleSubmit = useCallback(async () => {
    const request = { name: name, description: description };
    if (await createApplication(request)) {
      navigate(routes.dashboard.applications);
      toaster.success('Application successfully created!');
    }
  }, [name, description, createApplication, navigate]);

  return (
    <Form className="application-form">
      <FormContent>
        <Title>Create application</Title>
        <Description>To create application you need to fill name field below.</Description>
        <hr />
        <NameFieldset
          value={name}
          label="Name*"
          placeholder="Enter application name..."
          onChange={setName}
          isValid={nameValidationResult.success}
          validationErrors={nameValidationResult.errorMessages}
        ></NameFieldset>
        <DescriptionFieldset
          value={description}
          label="Description"
          placeholder="Enter application description..."
          onChange={setDescription}
        ></DescriptionFieldset>
      </FormContent>
      <FormFooter>
        <SubmitButton onSubmit={handleSubmit} validationChecks={[() => validateName(name)]}>
          Create application
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default CreateApplicationForm;

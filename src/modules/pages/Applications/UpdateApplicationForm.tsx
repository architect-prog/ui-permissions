import React, { useCallback, useState } from 'react';
import { params, routes } from 'appConstants';
import { useParamNumber } from 'hooks';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { containsData, required } from 'validation';
import { toaster, validatorFactory } from 'utils';
import { useNavigate } from 'react-router';
import { useApplication, useApplications, useValidation } from 'hooks';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';

const UpdateApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const applicationId = useParamNumber(params.applicationId);
  const { updateApplication } = useApplications();
  const [description, setDescription] = useState<string>('');
  const [name, setName, nameValidationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Application name is required!', required),
    validatorFactory.create('Application name should contain not only whitespace characters!', containsData),
  );

  useApplication(applicationId, (x) => {
    setName(x.name);
    setDescription(x.description ?? '');
  });

  const handleSubmit = useCallback(async () => {
    const request = { name: name, description: description };
    if (await updateApplication(applicationId, request)) {
      navigate(routes.dashboard.applications);
      toaster.success('Application successfully updated!');
    }
  }, [applicationId, name, description, updateApplication, navigate]);

  return (
    <Form className="application-form">
      <FormContent>
        <Title>Update application</Title>
        <Description>To update application you need to fill name field below.</Description>
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
          Update application
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default UpdateApplicationForm;

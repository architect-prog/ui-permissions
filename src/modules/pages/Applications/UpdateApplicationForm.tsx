import React, { useCallback, useState } from 'react';
import { useApplications, useValidation } from 'hooks';
import { UpdateApplicationRequest } from 'types/api';
import { params, routes } from 'appConstants';
import { useParamNumber } from 'hooks';
import { DescriptionFieldset, NameFieldset } from 'modules/fieldset';
import { nonEmptyValidation } from 'validation';
import { validatorFactory } from 'utils';
import { useNavigate } from 'react-router';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';

const UpdateApplicationForm: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);

  const navigate = useNavigate();
  const { updateApplication } = useApplications();
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
      const request: UpdateApplicationRequest = {
        name: name,
        description: description,
      };

      if (await updateApplication(applicationId, request)) {
        navigate(routes.dashboard.applications);
      }
    }
  }, [applicationId, name, description, updateApplication, validateCurrentName, navigate]);

  return (
    <Form className="application-form">
      <FormContent>
        <Title>Update application</Title>
        <Description>To update application you need to fill name field below.</Description>
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
        <Button className="button-warning w-30" type="button" onClick={handleSubmit}>
          Update application
        </Button>
      </FormFooter>
    </Form>
  );
};

export default UpdateApplicationForm;

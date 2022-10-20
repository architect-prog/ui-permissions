import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { useAreas, useParamNumber, useValidation } from 'hooks';
import { CreateAreaRequest } from 'types/api';
import { NameFieldset } from 'modules/fieldset';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';
import { useNavigate } from 'react-router';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';

const CreateAreaForm: React.FC = () => {
  const navigate = useNavigate();
  const applicationId = useParamNumber(params.applicationId);
  const { createArea } = useAreas(applicationId);
  const [name, setName, nameValidationResult, validateCurrentName] = useValidation<string>(
    '',
    validatorFactory.create('Please provide an area name.', nonEmptyValidation),
  );

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const handleSubmit = useCallback(async () => {
    const result = validateCurrentName();
    if (result.success) {
      const request: CreateAreaRequest = {
        name: name,
        applicationId: applicationId,
      };

      if (await createArea(request)) {
        navigate(routes.dashboard.areas(applicationId));
      }
    }
  }, [name, applicationId, createArea, validateCurrentName, navigate]);

  return (
    <Form className="area-form">
      <FormContent>
        <Title>Create area</Title>
        <Description>To create area you need to fill name field. Name is required for area.</Description>
        <hr />
        <NameFieldset
          label="Name*"
          placeholder="Enter area name..."
          onChange={handleNameChange}
          isValid={nameValidationResult.success}
          validationErrors={nameValidationResult.errorMessages}
        ></NameFieldset>
      </FormContent>
      <FormFooter>
        <Button className="button-primary w-30" type="button" onClick={handleSubmit}>
          Create area
        </Button>
      </FormFooter>
    </Form>
  );
};

export default CreateAreaForm;

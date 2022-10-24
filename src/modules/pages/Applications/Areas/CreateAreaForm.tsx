import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { NameFieldset } from 'modules/fieldset';
import { toaster, validatorFactory } from 'utils';
import { useNavigate } from 'react-router';
import { containsData, required } from 'validation';
import { useAreas, useParamNumber, useValidation } from 'hooks';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';

const CreateAreaForm: React.FC = () => {
  const navigate = useNavigate();
  const applicationId = useParamNumber(params.applicationId);
  const { createArea } = useAreas(applicationId);
  const [name, setName, nameValidationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Area name is required!', required),
    validatorFactory.create('Area name should contain not only whitespace characters!', containsData),
  );

  const handleSubmit = useCallback(async () => {
    const request = { name: name, applicationId: applicationId };

    if (await createArea(request)) {
      navigate(routes.dashboard.areas(applicationId));
      toaster.success('Area successfully created!');
    }
  }, [name, applicationId, createArea, navigate]);

  return (
    <Form className="area-form">
      <FormContent>
        <Title>Create area</Title>
        <Description>To create area you need to fill name field. Name is required for area.</Description>
        <hr />
        <NameFieldset
          value={name}
          label="Name*"
          placeholder="Enter area name..."
          onChange={setName}
          isValid={nameValidationResult.success}
          validationErrors={nameValidationResult.errorMessages}
        ></NameFieldset>
      </FormContent>
      <FormFooter>
        <SubmitButton onSubmit={handleSubmit} validationChecks={[() => validateName(name)]}>
          Create area
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default CreateAreaForm;

import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { useAreas, useParamNumber, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { UpdateAreaRequest } from 'types/api';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';
import { Button, Description, Form, FormContent, FormFooter, Title } from 'modules/shared';
import { useNavigate } from 'react-router';

const UpdateAreaForm: React.FC = () => {
  const areaId = useParamNumber(params.areaId);
  const applicationId = useParamNumber(params.applicationId);
  const navigate = useNavigate();
  const { updateArea } = useAreas(applicationId);
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
      const request: UpdateAreaRequest = {
        name: name,
        applicationId: applicationId,
      };

      if (await updateArea(areaId, request)) {
        navigate(routes.dashboard.areas(applicationId));
      }
    }
  }, [applicationId, areaId, name, navigate, updateArea, validateCurrentName]);

  return (
    <Form className="area-form">
      <FormContent>
        <Title>Update area</Title>
        <Description>To update area you need to fill name field. Name is required for area.</Description>
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
        <Button className="button-warning w-30" type="button" onClick={handleSubmit}>
          Update area
        </Button>
      </FormFooter>
    </Form>
  );
};

export default UpdateAreaForm;

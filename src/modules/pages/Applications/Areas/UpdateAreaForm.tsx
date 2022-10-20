import { params, routes } from 'appConstants';
import { useAreas, useParamNumber, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { Form, NavigationButton } from 'modules/shared';
import React, { useCallback } from 'react';
import { UpdateAreaRequest } from 'types/api';
import { validatorFactory } from 'utils';
import { nonEmptyValidation } from 'validation';

const UpdateAreaForm: React.FC = () => {
  const areaId = useParamNumber(params.areaId);
  const applicationId = useParamNumber(params.applicationId);
  const { updateArea } = useAreas(applicationId);
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

    const request: UpdateAreaRequest = {
      name: name,
      applicationId: applicationId,
    };

    await updateArea(areaId, request);
  }, [applicationId, areaId, name, nameValidationResult, updateArea]);

  return (
    <Form
      title="Update area form"
      description="To update area you need to fill name field in this form."
      className="update-area-form m-2 p-2"
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
        className="button-warning w-40"
      >
        Create
      </NavigationButton>
    </Form>
  );
};

export default UpdateAreaForm;

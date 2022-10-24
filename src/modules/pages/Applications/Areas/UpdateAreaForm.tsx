import React, { useCallback } from 'react';
import { params, routes } from 'appConstants';
import { useArea, useAreas, useParamNumber, useValidation } from 'hooks';
import { NameFieldset } from 'modules/fieldset';
import { useNavigate } from 'react-router';
import { containsData, required } from 'validation';
import { toaster, validatorFactory } from 'utils';
import { Description, Form, FormContent, FormFooter, SubmitButton, Title } from 'modules/shared';

const UpdateAreaForm: React.FC = () => {
  const navigate = useNavigate();
  const areaId = useParamNumber(params.areaId);
  const applicationId = useParamNumber(params.applicationId);
  const { updateArea } = useAreas(applicationId);
  const [name, setName, nameValidationResult, validateName] = useValidation<string>(
    '',
    validatorFactory.create('Area name is required!', required),
    validatorFactory.create('Area name should contain not only whitespace characters!', containsData),
  );

  useArea(applicationId, areaId, (x) => {
    setName(x.name);
  });

  const handleSubmit = useCallback(async () => {
    const request = { name: name, applicationId: applicationId };

    if (await updateArea(areaId, request)) {
      navigate(routes.dashboard.areas(applicationId));
      toaster.success('Area successfully updated!');
    }
  }, [applicationId, areaId, name, navigate, updateArea]);

  return (
    <Form className="area-form">
      <FormContent>
        <Title>Update area</Title>
        <Description>To update area you need to fill name field. Name is required for area.</Description>
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
          Update area
        </SubmitButton>
      </FormFooter>
    </Form>
  );
};

export default UpdateAreaForm;

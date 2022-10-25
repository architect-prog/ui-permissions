import React, { useState } from 'react';
import { params, routes } from 'appConstants';
import { useApplication, useAreas } from 'hooks';
import { ButtonContent, Description, NavigationButton, Title } from 'modules/shared';
import { useParamNumber } from 'hooks';
import { BiLayerPlus } from 'react-icons/bi';
import { ApplicationResponse } from 'types/api';
import Area from './Area';

const Areas: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);
  const { areasCollection } = useAreas(applicationId);
  const [application, setApplication] = useState<ApplicationResponse>();

  useApplication(applicationId, (x) => {
    setApplication(x);
  });

  const areas =
    areasCollection.items.length == 0 ? (
      <div className="text-md">This application has no areas yet</div>
    ) : (
      <table className="areas">
        <thead className="areas-header">
          <tr>
            <th className="text-align-left">Name</th>
            <th className="text-align-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {areasCollection.items.map((area) => (
            <Area key={area.id} id={area.id} applicationId={area.applicationId} name={area.name}></Area>
          ))}
        </tbody>
      </table>
    );

  return (
    <div className="area-page">
      <Title>Application info:</Title>
      <Description>
        <b>ApplicationId:</b> {application?.id}
        <br />
        <b>Application:</b> {application?.name}
        <br />
        <b>Description:</b> {application?.description}
      </Description>
      <Title>Areas:</Title>
      <Description>
        An area is a specific application page or couple of pages.
        <br />
        For each area you can create/update list of permissions for specific roles.
        <br />
        You can create/update an area and add/update permissions to it.
        <br />
        You can see list of existing areas in list below.
      </Description>
      <NavigationButton className="button-primary" to={routes.dashboard.createArea(applicationId)}>
        <ButtonContent>
          Create area <BiLayerPlus className="icon ml-03" />
        </ButtonContent>
      </NavigationButton>
      <hr />
      {areas}
    </div>
  );
};

export default Areas;

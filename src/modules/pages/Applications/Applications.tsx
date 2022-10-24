import React from 'react';
import Application from './Application';
import { routes } from 'appConstants';
import { useApplications } from 'hooks';
import { HiSquaresPlus } from 'react-icons/hi2';
import { ButtonContent, Description, NavigationButton, Title } from 'modules/shared';

const Applications: React.FC = () => {
  const { applicationsCollection } = useApplications();

  const applications =
    applicationsCollection.items.length == 0 ? (
      <div className="text-md">There are no created applications yet</div>
    ) : (
      <div className="applications">
        {applicationsCollection.items.map((application) => (
          <Application
            key={application.id}
            description={application.description}
            name={application.name}
            id={application.id}
          />
        ))}
      </div>
    );

  return (
    <div className="application-page">
      <Title>Applications:</Title>
      <Description>
        An application is a group of areas for which you create specific permissions.
        <br />
        You can create/update an application and add areas to it.
        <br />
        You can see list of applications in list below.
      </Description>
      <NavigationButton className="button-primary" to={routes.dashboard.createApplication}>
        <ButtonContent>
          Create application <HiSquaresPlus className="icon ml-03" />
        </ButtonContent>
      </NavigationButton>
      <hr />
      {applications}
    </div>
  );
};

export default Applications;

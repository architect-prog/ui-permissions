import React from 'react';
import Application from './Application';
import { routes } from 'appConstants';
import { useApplications } from 'hooks';
import { NavigationButton } from 'modules/shared';
import { HiSquaresPlus } from 'react-icons/hi2';

const Applications: React.FC = () => {
  const { applicationsCollection } = useApplications();
  return (
    <div className="p-1">
      <div className="d-flex justify-content-center ">
        <NavigationButton className="button-primary" to={routes.dashboard.createApplication}>
          <HiSquaresPlus className="icon" />
        </NavigationButton>
      </div>
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
    </div>
  );
};

export default Applications;

import { routes } from 'appConstants';
import { useApplications } from 'hooks';
import { Button, NavigationButton } from 'modules/shared';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ApplicationProps } from 'types/frontend/props/ApplicationProps';

const Application: React.FC<ApplicationProps> = ({ id, name, description }) => {
  const { deleteApplication } = useApplications();

  return (
    <div className="application">
      <div className="card ">
        <div className="card-body">
          <NavLink to={`${routes.dashboard.applications}/${id}/areas`}>
            <h2 className="card-title mb-05">{name}</h2>
          </NavLink>
          <p className="card-description">{description}</p>
        </div>

        <div className="card-footer d-flex justify-content-end mt-1">
          <NavigationButton to={routes.dashboard.updateApplication(id)} className="button-warning">
            <FaEdit />
          </NavigationButton>
          <Button onClick={async () => await deleteApplication(id)} className="button-danger ml-1">
            <FaTrash />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Application;

import { paths } from 'appConstants';
import { useApplications } from 'hooks';
import { Button, NavigationButton } from 'modules/shared';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { ApplicationProps } from 'types/frontend/ApplicationProps';

const Application: React.FC<ApplicationProps> = ({ id, name, description }) => {
  const { deleteApplication } = useApplications();

  return (
    <div className="application">
      <div className="card ">
        <div className="card-body">
          <NavLink to={`${paths.applications}/${id}/areas`}>
            <h2 className="card-title mb-05">{name}</h2>
          </NavLink>

          <p className="card-description">{description}</p>
        </div>

        <div className="card-footer d-flex justify-content-end mt-1">
          <NavigationButton to={paths.updateApplication(id)} className="btn-update">
            <FaEdit />
          </NavigationButton>
          <Button onClick={async () => await deleteApplication(id)} className="btn-delete ml-1">
            <FaTrash />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Application;

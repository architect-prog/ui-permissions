import React from 'react';
import { routes } from 'appConstants';
import { useApplications } from 'hooks';
import { NavLink } from 'react-router-dom';
import { IoLayers } from 'react-icons/io5';
import { ApplicationProps } from 'types/frontend';
import { Button, Description, NavigationButton, Title } from 'modules/shared';
import { RiEdit2Fill, RiDeleteBin2Fill } from 'react-icons/ri';

const Application: React.FC<ApplicationProps> = ({ id, name, description }) => {
  const { deleteApplication } = useApplications();

  return (
    <div className="application">
      <div className="card">
        <div className="card-body">
          <NavLink to={routes.dashboard.areas(id)}>
            <Title className="card-title">{name}</Title>
          </NavLink>
          <Description className="card-description">{description}</Description>
        </div>

        <div className="card-footer">
          <NavigationButton className="button-primary" to={routes.dashboard.areas(id)}>
            <IoLayers className="icon" />
          </NavigationButton>
          <NavigationButton className="button-warning ml-05" to={routes.dashboard.updateApplication(id)}>
            <RiEdit2Fill className="icon" />
          </NavigationButton>
          <Button className="button-danger ml-05" onClick={async () => await deleteApplication(id)}>
            <RiDeleteBin2Fill className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Application;

import { paths } from 'appConstants';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ApplicationProps } from 'types/frontend/ApplicationProps';

const Application: React.FC<ApplicationProps> = ({ id, name, description }) => {
  return (
    <div className="application">
      <NavLink to={`${paths.applications}/${id}/areas`}>
        <div className="card ">
          <div className="card-body">
            <h2 className="card-title mb-05">{name}</h2>
            <p className="card-description">{description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Application;

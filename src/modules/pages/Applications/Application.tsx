import React from 'react';
import { NavLink } from 'react-router-dom';
import { ApplicationProps } from 'types/frontend/ApplicationProps';

const Application: React.FC<ApplicationProps> = ({ id, name }) => {
  return (
    <div className="application">
      <NavLink to={`/roles/applications/${id}`}>
        <div className="card">
          <div className="card-body">
            <div className="card-title mb-05 mt-05">{name}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Application;

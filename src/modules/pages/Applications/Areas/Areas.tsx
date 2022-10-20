import React from 'react';
import { params, routes } from 'appConstants';
import { useAreas } from 'hooks';
import { Button, NavigationButton } from 'modules/shared';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useParamNumber } from 'hooks';
import { Link } from 'react-router-dom';
const Areas: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);
  const { areasCollection, deleteArea } = useAreas(applicationId);
  return (
    <div className="areas p-2">
      <h3 className="mb-05">Areas Page</h3>
      <p className="areas-description mb-1">
        A areas is a group of permissions that you can assign to principals.
        <br /> You can create a area and add permissions to it, or copy an existing role and adjust its permissions.
      </p>
      <div className="d-flex justify-content-center mb-1">
        <NavigationButton
          to={routes.dashboard.createArea(applicationId)}
          title="Create area"
          className="button-primary"
        ></NavigationButton>
      </div>
      <div className="d-flex justify-content-center">
        <table className="areas-table w-80 p-1">
          <thead>
            <tr>
              <th className="text-align-left">Name</th>
              <th className="text-align-left">Permissions</th>
              <th className="text-align-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {areasCollection.items.map((area) => (
              <tr>
                <td>
                  <Link to={routes.dashboard.area(area.applicationId, area.id)}>{area.name}</Link>
                </td>
                <td>Currently there no counter for permissions</td>
                <td>
                  <NavigationButton to={routes.dashboard.updateArea(applicationId, area.id)} className="button-warning">
                    <FaEdit />
                  </NavigationButton>
                  <Button
                    onClick={async () => {
                      await deleteArea(area.id);
                    }}
                    className="button-danger ml-1"
                  >
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Areas;

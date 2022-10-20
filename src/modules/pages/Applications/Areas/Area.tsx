import React from 'react';
import { routes } from 'appConstants';
import { Link } from 'react-router-dom';
import { AreaProps } from 'types/frontend';
import { Button, ButtonContent, NavigationButton } from 'modules/shared';
import { RiDeleteBin2Fill, RiEdit2Fill } from 'react-icons/ri';
import { FaShieldAlt } from 'react-icons/fa';
import { useAreas } from 'hooks';

const Area: React.FC<AreaProps> = ({ id, applicationId, name }) => {
  const { deleteArea } = useAreas(applicationId);

  return (
    <tr className="area">
      <td>
        <Link to={routes.dashboard.area(applicationId, id)}>{name}</Link>
      </td>
      <td>
        <NavigationButton className="button-primary" to={routes.dashboard.area(applicationId, id)}>
          <ButtonContent>
            Details <FaShieldAlt className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <NavigationButton className="button-warning ml-05" to={routes.dashboard.updateArea(applicationId, id)}>
          <ButtonContent>
            Update area <RiEdit2Fill className="icon ml-03" />
          </ButtonContent>
        </NavigationButton>
        <Button className="button-danger ml-05" onClick={async () => await deleteArea(id)}>
          <ButtonContent>
            Delete area <RiDeleteBin2Fill className="icon ml-03" />
          </ButtonContent>
        </Button>
      </td>
    </tr>
  );
};

export default Area;

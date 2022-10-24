import React from 'react';
import { ButtonContent, Description, NavigationButton, Title } from 'modules/shared';
import { routes } from 'appConstants';
import { useRoles } from 'hooks';
import Role from './Role';
import { BsShieldFillPlus } from 'react-icons/bs';

const Roles: React.FC = () => {
  const { rolesCollection } = useRoles();

  const roles =
    rolesCollection.items.length == 0 ? (
      <div className="text-md">There are no created roles yet</div>
    ) : (
      <table className="roles">
        <thead className="roles-header">
          <tr>
            <th className="text-align-left">Name</th>
            <th className="text-align-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rolesCollection.items.map((x) => (
            <Role key={x.id} id={x.id} name={x.name}></Role>
          ))}
        </tbody>
      </table>
    );

  return (
    <div className="role-page">
      <Title>Roles:</Title>
      <Description>
        A role is a group of permissions for specific application area.
        <br />
        You can create/update a role and add permissions to it, or update existing permissions.
        <br />
        When you create a role, default permissions are automatically created for all application areas.
        <br />
        You can see list of existing roles in list below.
      </Description>
      <NavigationButton className="button-primary" to={routes.dashboard.createRole} title="Create role">
        <ButtonContent>
          Create role <BsShieldFillPlus className="icon ml-03" />
        </ButtonContent>
      </NavigationButton>
      <hr />
      {roles}
    </div>
  );
};

export default Roles;

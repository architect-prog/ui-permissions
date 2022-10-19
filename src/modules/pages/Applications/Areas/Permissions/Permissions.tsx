import React, { useEffect, useState } from 'react';
import { Button, Checkbox } from 'modules/shared';
import { useRecoilValue } from 'recoil';
import { permissionsAtom, rolesAtom } from 'store/recoil/atoms';
import { RoleResponse } from 'types/api';
import { useParamNumber } from 'hooks';
import { params } from 'appConstants';
import { PermissionsQuery } from 'store/recoil/queries';

const Permissions: React.FC = () => {
  const areaId = useParamNumber(params.areaId);

  const roles = useRecoilValue(rolesAtom);
  const [role, setRole] = useState<RoleResponse>();
  useEffect(() => {
    if (!role) {
      const fetchedRoles = roles.items[0];
      setRole(fetchedRoles);
      return;
    }
  }, [role, roles.items]);
  const query: PermissionsQuery = {
    areaIds: [areaId],
    roleIds: !role?.id ? [] : [+role.id],
  };
  const permissions = useRecoilValue(permissionsAtom(query));
  const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const roleId = +e.target.value;
    const roleItem = roles.items.find((t) => t.id == roleId);
    setRole(roleItem);
  };

  return (
    <div className="permissions">
      <section className="permissions-section">
        <form className="permissions-form">
          <div className="mt-2 mb-2 d-flex justify-content-center">
            <select className="w-100 p-05" onChange={onChangeRole} name="cars" id="cars">
              {roles.items.map((role) => (
                <option value={role.id}>{role.name}</option>
              ))}
            </select>
          </div>
          <h1 className="permissions-form-header-label">Permissions:</h1>
          <hr />
          {permissions.map((permission) => (
            <>
              <Checkbox value={permission.canCreate} label={'canCreate'} />
              <Checkbox value={permission.canDelete} label={'canDelete'} />
              <Checkbox value={permission.canUpdate} label={'canUpdate'} />
              <Checkbox value={permission.canRead} label={'canRead'} />
              {permission.customPermissions.map((customPermission) => (
                <Checkbox value={customPermission.haveAccess} label={customPermission.name} />
              ))}
            </>
          ))}
          <hr />
          <Button className="permissions-save-changes-button" type="button">
            Save changes
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Permissions;

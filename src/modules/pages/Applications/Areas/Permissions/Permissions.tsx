import React from 'react';
import { Button, Checkbox } from 'modules/shared';
import { useRecoilValue } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { PermissionRequest, PermissionResponse, UpdatePermissionRequest } from 'types/api';
import { useParamNumber, usePermissionCollection } from 'hooks';
import { params } from 'appConstants';
import { toaster } from 'utils';

const Permissions: React.FC = () => {
  const areaId = useParamNumber(params.areaId);
  const roles = useRecoilValue(rolesAtom);

  const { permissionCollection, role, onChecked, onChangeRole, updatePermissionCollection } =
    usePermissionCollection(areaId);
  const mappedCheckboxes = permissionCollection?.customPermissions.map((customPermission) => (
    <Checkbox
      key={`${role?.id}-${customPermission.name}`}
      onChange={(checked) => onChecked(customPermission.name, checked)}
      value={customPermission.haveAccess}
      label={customPermission.name}
      id={`${role?.id}-${customPermission.name}`}
    />
  ));
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
          {mappedCheckboxes}
          <hr />
          <Button
            onClick={async () => {
              const customPermissions = permissionCollection?.customPermissions ?? [];
              const mapToRequest = (response: PermissionResponse): PermissionRequest => {
                const result: PermissionRequest = { name: response.name, hasAccess: response.haveAccess };
                return result;
              };
              const customPermissionRequest = customPermissions.map(mapToRequest) ?? [];
              const request: UpdatePermissionRequest = {
                areaId: permissionCollection?.areaId ?? 0,
                roleId: permissionCollection?.roleId ?? 0,
                permissions: customPermissionRequest,
              };
              await updatePermissionCollection(request);
              toaster.success('updated');
            }}
            className="permissions-save-changes-button"
            type="button"
          ></Button>
        </form>
      </section>
    </div>
  );
};

export default Permissions;

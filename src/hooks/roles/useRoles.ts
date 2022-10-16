import { useCallback } from 'react';
import { rolesService } from 'services';
import { useRecoilState } from 'recoil';
import { useApiErrorHandling } from 'hooks';
import { collection, safeApiRequest } from 'utils';
import { rolesAtom } from 'store/recoil/atoms';
import { RoleResponse, CreateRoleRequest, UpdateRoleRequest } from 'types/api';
import { RoleActions } from 'types/frontend';

const useRoles = (): RoleActions => {
  const { handleApiError } = useApiErrorHandling();
  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom);

  const createRole = useCallback(
    async (request: CreateRoleRequest) => {
      const response = await safeApiRequest(async () => await rolesService.create(request));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      setRolesCollection((roles) => {
        const updatedRoles = collection(roles).add(response.data);
        return updatedRoles;
      });
    },
    [setRolesCollection, handleApiError],
  );

  const updateRole = useCallback(
    async (roleId: number, request: UpdateRoleRequest) => {
      const response = await safeApiRequest(async () => await rolesService.update(roleId, request));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      const updatedRole: RoleResponse = { id: roleId, name: request.name };
      setRolesCollection((roles) => {
        const updatedRoles = collection(roles).replace((x) => x.id === roleId, updatedRole);
        return updatedRoles;
      });
    },
    [setRolesCollection, handleApiError],
  );

  const deleteRole = useCallback(
    async (roleId: number) => {
      const response = await safeApiRequest(async () => await rolesService.delete(roleId));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      setRolesCollection((roles) => {
        const updatedRoles = collection(roles).remove((x) => x.id !== roleId);
        return updatedRoles;
      });
    },
    [setRolesCollection, handleApiError],
  );

  return {
    createRole: createRole,
    updateRole: updateRole,
    deleteRole: deleteRole,
    rolesCollection: rolesCollection,
  };
};

export default useRoles;

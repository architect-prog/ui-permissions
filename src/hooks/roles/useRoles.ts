import { useCallback } from 'react';
import { rolesService } from 'services';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { Collection, RoleResponse, CreateRoleRequest, UpdateRoleRequest } from 'types/api';
import { safeApiRequest } from 'utils';

type RoleActions = {
  rolesCollection: Collection<RoleResponse>;
  deleteRole: (roleId: number) => Promise<void>;
  createRole: (request: CreateRoleRequest) => Promise<void>;
  updateRole: (roleId: number, request: UpdateRoleRequest) => Promise<void>;
};

const useRoles = (): RoleActions => {
  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom);

  const createRole = useCallback(
    async (request: CreateRoleRequest) => {
      const response = await safeApiRequest(async () => await rolesService.create(request));
      if (response.success) {
        setRolesCollection((rolesCollection) => {
          const { items, count } = rolesCollection;
          const updatedRoles = {
            items: [...items, response.data],
            count: count + 1,
          };
          return updatedRoles;
        });
      }
    },
    [setRolesCollection],
  );

  const updateRole = useCallback(
    async (roleId: number, request: UpdateRoleRequest) => {
      const response = await safeApiRequest(async () => await rolesService.update(roleId, request));
      if (response.success) {
        const updatedRole: RoleResponse = { id: roleId, name: request.name };

        setRolesCollection((rolesCollection) => {
          const { items, count } = rolesCollection;
          const roleItems = [...items];
          roleItems[items.findIndex((item) => item.id == roleId)] = updatedRole;

          const newRolesCollection = {
            items: roleItems,
            count: count,
          };
          return newRolesCollection;
        });
      }
    },
    [setRolesCollection],
  );

  const deleteRole = useCallback(
    async (roleId: number) => {
      const response = await safeApiRequest(async () => await rolesService.delete(roleId));
      if (response.success) {
        setRolesCollection((roles) => {
          const { items, count } = roles;
          const updatedRoles = {
            items: items.filter((x) => x.id !== roleId),
            count: count - 1,
          };
          return updatedRoles;
        });
      }
    },
    [setRolesCollection],
  );

  return {
    createRole: createRole,
    updateRole: updateRole,
    deleteRole: deleteRole,
    rolesCollection: rolesCollection,
  };
};

export default useRoles;

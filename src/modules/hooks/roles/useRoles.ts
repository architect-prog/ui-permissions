import { useCallback } from 'react';
import { rolesService } from 'services';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { Collection, RoleResponse, CreateRoleRequest, UpdateRoleRequest } from 'types/api';

export type UseRoles = {
  rolesCollection: Collection<RoleResponse>;
  deleteRole: (roleId: number) => Promise<void>;
  createRole: (request: CreateRoleRequest) => Promise<void>;
  updateRole: (roleId: number, request: UpdateRoleRequest) => Promise<void>;
};

const useRoles = (): UseRoles => {
  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom);

  const createRole = useCallback(
    async (request: CreateRoleRequest) => {
      const createdRole = await rolesService.create(request);

      setRolesCollection((rolesCollection) => {
        const { items, count } = rolesCollection;
        const updatedRoles = {
          items: [...items, createdRole],
          count: count + 1,
        };
        return updatedRoles;
      });
    },
    [setRolesCollection],
  );

  const updateRole = useCallback(
    async (roleId: number, request: UpdateRoleRequest) => {
      await rolesService.update(roleId, request);
      const updatedRole: RoleResponse = { id: roleId, name: request.name };

      setRolesCollection((rolesCollection) => {
        const { items, count } = rolesCollection;
        const otherItems = items.filter((t) => t.id !== roleId);

        const updatedRoles = {
          items: [...otherItems, updatedRole],
          count: count,
        };
        return updatedRoles;
      });
    },
    [setRolesCollection],
  );

  const deleteRole = useCallback(
    async (roleId: number) => {
      const result = await rolesService.delete(roleId);

      setRolesCollection((roles) => {
        const { items, count } = roles;
        const updatedRoles = {
          items: items.filter((x) => x.id !== roleId),
          count: count - 1,
        };
        return updatedRoles;
      });
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

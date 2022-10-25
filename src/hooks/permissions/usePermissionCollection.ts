import { useCallback, useEffect, useState } from 'react';
import { permissionsService } from 'services';
import { useRecoilState } from 'recoil';
import { permissionsAtom } from 'store/recoil/atoms';
import { safeApiRequest } from 'utils';
import { useApiErrorHandling, useRoles } from 'hooks';
import { PermissionCollectionResponse, RoleResponse, UpdatePermissionRequest } from 'types/api';
import { PermissionsQuery } from 'store/recoil/queries';
import { PermissionCollectionActions } from 'types/frontend';

const usePermissionCollection = (areaId: number): PermissionCollectionActions => {
  const { handleApiError } = useApiErrorHandling();
  const { rolesCollection } = useRoles();
  const [role, setRole] = useState<RoleResponse>();
  const [nextRole, setNextRole] = useState<RoleResponse>();
  const [query, setQuery] = useState<PermissionsQuery>();
  const [permissionCollectionState, setPermissionCollectionState] = useState<
    PermissionCollectionResponse | undefined
  >();
  const [permissionCollection, setPermissionCollection] = useRecoilState(permissionsAtom(query));

  useEffect(() => {
    if (!role) {
      const fetchedRole = rolesCollection.items[0];
      setRole(fetchedRole);
      setNextRole(fetchedRole);
      const newQuery: PermissionsQuery = { areaIds: [areaId], roleIds: [fetchedRole.id] };
      setQuery(newQuery);
      return;
    }
    if (role.id !== nextRole?.id) {
      setRole(nextRole);
      setPermissionCollectionState(permissionCollection);
    }
    if (!permissionCollectionState) {
      setPermissionCollectionState(permissionCollection);
    }
  }, [areaId, nextRole, permissionCollection, permissionCollectionState, role, rolesCollection.items]);

  const updatePermissionCollection = useCallback(
    async (request: UpdatePermissionRequest) => {
      const response = await safeApiRequest(async () => await permissionsService.update(request));
      if (!response.success) {
        handleApiError(response);
        return;
      }

      setPermissionCollection((pc) => {
        const newPermissionCollection: PermissionCollectionResponse = {
          areaId: pc?.areaId ?? 0,
          roleId: pc?.roleId ?? 0,
          customPermissions: permissionCollectionState?.customPermissions ?? [],
        };

        return newPermissionCollection;
      });
    },
    [setPermissionCollection, handleApiError, permissionCollectionState?.customPermissions],
  );

  const onChecked = (label: string | undefined, checked: boolean): void => {
    const customPermissions = permissionCollectionState?.customPermissions ?? [];

    const newPermissionCollectionState: PermissionCollectionResponse = {
      areaId: permissionCollectionState?.areaId ?? 0,
      roleId: permissionCollectionState?.roleId ?? 0,
      customPermissions: [...customPermissions],
    };
    const index = newPermissionCollectionState.customPermissions.findIndex((permission) => permission.name == label);
    newPermissionCollectionState.customPermissions[index] = {
      name: customPermissions[index].name,
      haveAccess: checked,
      isDefault: customPermissions[index].isDefault,
    };

    setPermissionCollectionState(newPermissionCollectionState);
  };

  const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const roleId = +e.target.value;
    const roleItem = rolesCollection.items.find((t) => t.id == roleId);
    setNextRole(roleItem);
    const newQuery: PermissionsQuery = {
      areaIds: [areaId],
      roleIds: !roleItem?.id ? [] : [roleItem.id],
    };
    setQuery(newQuery);
  };
  //   const onChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     const roleId = +e.target.value;
  //     const roleItem = roles.items.find((t) => t.id == roleId);
  //     setRole(roleItem);
  //   };
  //   const deletePermission = useCallback(
  //     async (permissionId: number) => {
  //       const response = await safeApiRequest(async () => await permissionsService.delete(permissionId));
  //       if (!response.success) {
  //         handleApiError(response);
  //         return;
  //       }

  //       setPermissionCollection((permissions) => {
  //         const updatedRoles = collection(permissions).remove((x) => x.id !== permissionId);
  //         return updatedRoles;
  //       });
  //     },
  //     [setPermissionCollection, handleApiError],
  //   );

  return {
    onChecked: onChecked,
    updatePermissionCollection: updatePermissionCollection,
    onChangeRole: onChangeRole,
    role: role,
    // deletePermission: deletePermission,
    permissionCollection: permissionCollectionState,
  };
};

export default usePermissionCollection;

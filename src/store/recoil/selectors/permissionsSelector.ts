import { selectorFamily } from 'recoil';
import { permissionsService } from 'services';
import { PermissionCollectionResponse } from 'types/api';
import { PermissionsQuery } from '../queries';

const permissionsGetter = (permissionsQuery?: PermissionsQuery) => {
  return async (): Promise<PermissionCollectionResponse | undefined> => {
    const permissions = await permissionsService.getAll(permissionsQuery?.areaIds, permissionsQuery?.roleIds);
    if (permissions.length <= 0) return undefined;
    return permissions.at(0);
  };
};

const permissionsSelector = selectorFamily({
  key: 'permissionsSelector',
  get: permissionsGetter,
});

export default permissionsSelector;

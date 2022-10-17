import { selectorFamily } from 'recoil';
import { permissionsService } from 'services';
import { PermissionsQuery } from '../queries';

const permissionsSelector = selectorFamily({
  key: 'permissionsSelector',
  get: (permissionsQuery: PermissionsQuery) => async () =>
    await permissionsService.getAll(permissionsQuery.areaIds, permissionsQuery.roleIds),
});

export default permissionsSelector;

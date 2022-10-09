import { selectorFamily } from 'recoil';
import permissionsService from 'services/api/PermissionsService';

const permissionsSelector = selectorFamily({
  key: 'permissionsSelector',
  get:
    (areaIds: number[] = [], roleIds: number[] = []) =>
    async () =>
      await permissionsService.getAll(areaIds, roleIds),
});

export default permissionsSelector;

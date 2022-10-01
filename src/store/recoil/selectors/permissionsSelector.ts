import { selector } from 'recoil';
import permissionsService from 'services/api/PermissionsService';

const permissionsSelector = selector({
  key: 'permissionsSelector',
  get: permissionsService.getAll,
});

export default permissionsSelector;

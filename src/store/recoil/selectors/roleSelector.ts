import { selectorFamily } from 'recoil';
import { RolesService } from 'services';
import { RoleResponse } from 'types/api';

const roleSelector = selectorFamily<RoleResponse, number>({
  key: 'roleSelector',
  get: (roleId: number) => async () => {
    const response = await RolesService.get(roleId);
    return response;
  },
});

export default roleSelector;

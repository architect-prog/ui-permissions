import { rolesService } from 'services';
import { selectorFamily } from 'recoil';
import { RoleResponse } from 'types/api';

const roleSelector = selectorFamily<RoleResponse, number>({
  key: 'roleSelector',
  get: (roleId: number) => async () => {
    const response = await rolesService.get(roleId);
    return response;
  },
});

export default roleSelector;

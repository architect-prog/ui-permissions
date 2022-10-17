import { selector } from 'recoil';
import { RoleResponse } from 'types/api';
import { Collection } from 'types/api/responses/common/Collection';
import { rolesService } from 'services';

const rolesSelector = selector({
  key: 'rolesSelector',
  get: async (): Promise<Collection<RoleResponse>> => {
    const response = await rolesService.getAll();
    return response;
  },
});

export default rolesSelector;

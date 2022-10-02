import { selector } from 'recoil';
import rolesService from 'services/api/RolesService';
import { RoleResponse } from 'types/api';
import { Collection } from 'types/api/responses/common/Collection';

const rolesSelector = selector({
  key: 'rolesSelector',
  get: async (): Promise<Collection<RoleResponse>> => {
    const response = await rolesService.getAll();
    return response;
  },
});

export default rolesSelector;

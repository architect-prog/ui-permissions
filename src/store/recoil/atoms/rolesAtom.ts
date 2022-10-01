import { atom } from 'recoil';
import { RoleResponse } from 'types/api';
import { Collection } from 'types/api/responses/Collection';
import { rolesSelector } from '../selectors';

const rolesAtom = atom<Collection<RoleResponse>>({
  key: 'rolesAtom',
  default: rolesSelector,
});

export default rolesAtom;

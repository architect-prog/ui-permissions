import { atomFamily } from 'recoil';
import { RoleResponse } from 'types/api';
import { roleSelector } from '../selectors';

const roleAtom = atomFamily<RoleResponse, number>({
  key: 'roleAtom',
  default: (id: number) => roleSelector(id),
});

export default roleAtom;

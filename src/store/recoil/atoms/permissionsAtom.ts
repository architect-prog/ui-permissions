import { atom } from 'recoil';
import { PermissionResponse } from 'types/api';
import { permissionsSelector } from '../selectors';

const permissionsAtom = atom<PermissionResponse[]>({
  key: 'permissionsAtom',
  default: permissionsSelector,
});

export default permissionsAtom;

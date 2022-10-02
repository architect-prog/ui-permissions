import { atom } from 'recoil';
import { PermissionCollectionResponse } from 'types/api';
import { permissionsSelector } from '../selectors';

const permissionsAtom = atom<PermissionCollectionResponse[]>({
  key: 'permissionsAtom',
  default: permissionsSelector,
});

export default permissionsAtom;

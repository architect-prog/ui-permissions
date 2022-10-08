import { atom } from 'recoil';
import { permissionsSelector } from '../selectors';

const permissionsAtom = atom({
  key: 'permissionsAtom',
  default: permissionsSelector,
});

export default permissionsAtom;

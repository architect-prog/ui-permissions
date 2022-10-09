import { atomFamily } from 'recoil';
import { permissionsSelector } from '../selectors';

const permissionsAtom = atomFamily({
  key: 'permissionsAtom',
  default: permissionsSelector,
});

export default permissionsAtom;

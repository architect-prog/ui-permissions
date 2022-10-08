import { atom } from 'recoil';
import { rolesSelector } from '../selectors';

const rolesAtom = atom({
  key: 'rolesAtom',
  default: rolesSelector,
});

export default rolesAtom;

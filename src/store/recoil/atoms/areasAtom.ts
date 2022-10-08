import { atomFamily } from 'recoil';
import { areasSelector } from '../selectors';

const areasAtom = atomFamily({
  key: 'areasAtom',
  default: areasSelector,
});

export default areasAtom;

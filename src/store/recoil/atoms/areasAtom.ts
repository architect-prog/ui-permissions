import { atom } from 'recoil';
import { AreaResponse, Collection } from 'types/api';
import { areasSelector } from '../selectors';

const areasAtom = atom<Collection<AreaResponse>>({
  key: 'areasAtom',
  default: areasSelector,
});

export default areasAtom;

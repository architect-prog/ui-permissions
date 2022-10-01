import { atom } from 'recoil';
import { AreaResponse } from 'types/api';
import { areasSelector } from '../selectors';

const areasAtom = atom<AreaResponse[]>({
  key: 'areasAtom',
  default: areasSelector,
});

export default areasAtom;

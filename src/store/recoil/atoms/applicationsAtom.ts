import { atom } from 'recoil';
import { applicationsSelector } from '../selectors';

const areasAtom = atom({
  key: 'applicationsAtom',
  default: applicationsSelector,
});

export default areasAtom;

import { atom } from 'recoil';
import { ApplicationResponse } from 'types/api';
import { applicationsSelector } from '../selectors';

const areasAtom = atom<ApplicationResponse[]>({
  key: 'applicationsAtom',
  default: applicationsSelector,
});

export default areasAtom;

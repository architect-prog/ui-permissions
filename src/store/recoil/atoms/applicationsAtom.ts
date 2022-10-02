import { atom } from 'recoil';
import { Collection, ApplicationResponse } from 'types/api';
import { applicationsSelector } from '../selectors';

const areasAtom = atom<Collection<ApplicationResponse>>({
  key: 'applicationsAtom',
  default: applicationsSelector,
});

export default areasAtom;

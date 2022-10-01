import { selector } from 'recoil';
import areasService from 'services/api/AreasService';

const areasSelector = selector({
  key: 'areasSelector',
  get: areasService.getAll,
});

export default areasSelector;

import { selector } from 'recoil';
import applicationsService from 'services/api/ApplicationsService';

const applicationsSelector = selector({
  key: 'applicationsSelector',
  get: applicationsService.getAll,
});

export default applicationsSelector;

import { selector } from 'recoil';
import { applicationsService } from 'services';

const applicationsSelector = selector({
  key: 'applicationsSelector',
  get: applicationsService.getAll,
});

export default applicationsSelector;

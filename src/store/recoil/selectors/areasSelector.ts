import { selectorFamily } from 'recoil';
import { areasService } from 'services';

const areasSelector = selectorFamily({
  key: 'areasSelector',
  get: (applicationId?: number) => async () => await areasService.getAll(applicationId),
});

export default areasSelector;

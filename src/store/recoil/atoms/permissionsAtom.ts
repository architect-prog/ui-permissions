import { PermissionsQuery } from 'store/recoil/queries';
import { atomFamily } from 'recoil';
import { permissionsSelector } from '../selectors';
import { PermissionCollectionResponse } from 'types/api';

const permissionsAtom = atomFamily<PermissionCollectionResponse | undefined, PermissionsQuery>({
  key: 'permissionsAtom',
  default: permissionsSelector,
});

export default permissionsAtom;

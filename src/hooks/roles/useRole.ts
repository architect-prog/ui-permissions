import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { RoleResponse } from 'types/api';
import { useRecoilState } from 'recoil';
import { rolesAtom } from 'store/recoil/atoms';
import { statusCodePages } from 'appConstants';

const useRole = (roleId: number, callback: (x: RoleResponse) => void) => {
  const navigate = useNavigate();
  const [rolesCollection] = useRecoilState(rolesAtom);
  const [isInitialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    const currentRole = rolesCollection.items.find((x) => x.id === roleId);
    if (!currentRole) {
      navigate(statusCodePages[404]);
      return;
    }

    callback(currentRole);
    setInitialized(true);
  }, [roleId, rolesCollection, isInitialized, navigate, callback]);
};

export default useRole;

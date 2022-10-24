import { useState, useEffect } from 'react';
import { statusCodePages } from 'appConstants';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { areasAtom } from 'store/recoil/atoms';
import { AreaResponse } from 'types/api';

const useArea = (applicationId: number, areaId: number, callback: (x: AreaResponse) => void) => {
  const navigate = useNavigate();
  const [areasCollection] = useRecoilState(areasAtom(applicationId));
  const [isInitialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    const currentArea = areasCollection.items.find((x) => x.id === areaId);
    if (!currentArea) {
      navigate(statusCodePages[404]);
      return;
    }

    callback(currentArea);
    setInitialized(true);
  }, [areaId, areasCollection, isInitialized, callback, navigate]);
};

export default useArea;

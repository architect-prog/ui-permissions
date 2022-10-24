import { useState, useEffect } from 'react';
import { statusCodePages } from 'appConstants';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { applicationsAtom } from 'store/recoil/atoms';
import { ApplicationResponse } from 'types/api';

const useApplication = (applicationId: number, callback: (x: ApplicationResponse) => void) => {
  const navigate = useNavigate();
  const [applicationsCollection] = useRecoilState(applicationsAtom);
  const [isInitialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    const currentApplication = applicationsCollection.items.find((x) => x.id === applicationId);
    if (!currentApplication) {
      navigate(statusCodePages[404]);
      return;
    }

    callback(currentApplication);
    setInitialized(true);
  }, [applicationId, applicationsCollection, isInitialized, callback, navigate]);
};

export default useApplication;

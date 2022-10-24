import { useEffect, useState } from 'react';

const useInitialization = (callback: () => void) => {
  const [isInitialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    callback();
    setInitialized(true);
  }, [isInitialized, callback]);
};

export default useInitialization;

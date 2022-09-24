import { RecoilValue } from 'recoil';
import { useEffect } from 'react';
import useValue from './useValue';

export const useSafeRecoilValue = <T>(recoilValue: RecoilValue<T>): T | undefined => {
  const [value, error] = useValue(recoilValue);

  useEffect(() => {
    if (error) {
      console.log('error');
    }
  }, [error]);

  return value;
};

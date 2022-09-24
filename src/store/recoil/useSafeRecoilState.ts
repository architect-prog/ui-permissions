import { RecoilState, RecoilValue, SetterOrUpdater, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import useValue from './useValue';

export const useSafeRecoilState = <T>(
  recoilState: RecoilState<T>,
): [T | undefined, SetterOrUpdater<T>] => {
  const setState = useSetRecoilState(recoilState);
  const [value, error] = useValue<T>(recoilState as RecoilValue<T>);

  useEffect(() => {
    if (error) {
      console.log('error');
    }
  }, [error]);

  return [value, setState];
};

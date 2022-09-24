import { RecoilValue, useRecoilValueLoadable } from 'recoil';

type Error = {
  message: string;
};

type RecoilValueResult<T> = [T?, string?];

const useValue = <T>(recoilValue: RecoilValue<T>): RecoilValueResult<T> => {
  const loadableValue = useRecoilValueLoadable<T>(recoilValue);

  if (loadableValue.state === 'hasError') {
    const { message } = loadableValue.contents as Error;
    return [undefined, message];
  }

  const value = loadableValue.getValue();
  return [value];
};

export default useValue;

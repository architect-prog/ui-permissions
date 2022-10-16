import { useParams } from 'react-router';

const useParamNumber = (key: string): number => {
  const params = useParams();
  const number = params[key] ?? 0;

  return +number;
};

export default useParamNumber;

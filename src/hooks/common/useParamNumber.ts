import { useParams } from 'react-router';

export const useParamNumber = (key: string): number => {
  const params = useParams();
  const number = params[key] ?? 0;

  return +number;
};

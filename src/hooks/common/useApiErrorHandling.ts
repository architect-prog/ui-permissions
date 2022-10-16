import { useNavigate } from 'react-router';
import { ApiError } from 'types/api';

type StatusCodePage = {
  path: string;
  statusCode: number;
};

type UseApiErrorHandling = {
  handleApiError: (error: ApiError) => void;
};

const statusCodePages: StatusCodePage[] = [
  {
    path: '*',
    statusCode: 404,
  },
  {
    path: '*',
    statusCode: 500,
  },
];

export const useApiErrorHandling = (): UseApiErrorHandling => {
  const navigate = useNavigate();

  const handleApiError = (error: ApiError) => {
    const statusCodePage = statusCodePages.find((x) => x.statusCode === error.statusCode);
    if (statusCodePage) {
      navigate(statusCodePage.path);
      return;
    }

    //toast.error(error.error, { position: right_bottom});
  };

  return {
    handleApiError: handleApiError,
  };
};

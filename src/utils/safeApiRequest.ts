import { AxiosResponse, AxiosError } from 'axios';
import { apiResponseFactory } from 'utils';
import { ApiResponse, ErrorResponse } from 'types/api';

const safeApiRequest = async <T>(request: () => Promise<T>): Promise<ApiResponse<T>> => {
  try {
    const data = await request();
    return apiResponseFactory.success(data);
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    const response = axiosError.response as AxiosResponse<ErrorResponse | undefined>;

    return response.data
      ? apiResponseFactory.error(response.data.error, response.data.statusCode)
      : apiResponseFactory.emptyError(response.status);
  }
};

export default safeApiRequest;

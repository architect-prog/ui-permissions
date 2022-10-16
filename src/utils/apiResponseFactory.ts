import { ApiError, ApiResult } from 'types/api';

const apiResponseFactory = {
  success: <T>(data: T): ApiResult<T> => {
    return {
      data: data,
      success: true,
    };
  },
  error: (error: string, statusCode: number): ApiError => {
    return {
      error: error,
      statusCode: statusCode,
      success: false,
    };
  },
  emptyError: (statusCode: number): ApiError => {
    return {
      error: '',
      statusCode: statusCode,
      success: false,
    };
  },
};

export default apiResponseFactory;

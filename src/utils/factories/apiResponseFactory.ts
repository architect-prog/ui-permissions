import { ApiError, ApiResult } from 'types/api';

const apiResponseFactory = {
  success: <T>(data: T): ApiResult<T> => {
    return {
      data: data,
      success: true,
    };
  },
  error: (message: string, statusCode: number): ApiError => {
    return {
      message: message,
      statusCode: statusCode,
      success: false,
    };
  },
  emptyError: (statusCode: number): ApiError => {
    return {
      message: '',
      statusCode: statusCode,
      success: false,
    };
  },
};

export default apiResponseFactory;

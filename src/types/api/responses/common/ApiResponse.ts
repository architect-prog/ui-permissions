export type ApiResult<T> = {
  data: T;
  success: true;
};

export type ApiError = {
  message: string;
  statusCode: number;
  success: false;
};

export type ApiResponse<T> = ApiError | ApiResult<T>;

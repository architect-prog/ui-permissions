import { ApiError } from 'types/api';

export type ApiErrorHandlingActions = {
  handleApiError: (error: ApiError) => void;
};

import { notification } from 'antd';
import { AxiosError } from 'axios';
import { IError } from 'models/error';
import { mapErrorToDescrition, mapErrorToMessage } from './error';
import {
  getAntdIconForType,
  useNotificationStore,
} from './useNotificationProvider';
import {
  translateErrorDescription,
  translateErrorMessage,
} from './useTranslateError';

// Custom hook for managing notifications
const useNoti = () => {
  const { addNoti } = useNotificationStore();

  // Function to add a success alert
  const addSuccessNoti = (message: string, description?: string) => {
    addNoti({
      type: 'success',
      message,
      description,
    });
  };

  // Function to add an error alert
  const addErrorNoti = (errors: unknown) => {
    const axiosError = errors as AxiosError<IError>;

    const message = translateErrorMessage(mapErrorToMessage(axiosError) || '');
    const description = translateErrorDescription(
      mapErrorToDescrition(axiosError) || '',
    );

    addNoti({
      type: 'error',
      message,
      description,
    });
  };

  // Return functions for adding success and error alerts
  return { addSuccessNoti, addErrorNoti };
};

// Export the custom hook
export default useNoti;

export const globalErrorHandler = (error: unknown) => {
  const axiosError = error as AxiosError<IError>;

  const message = translateErrorMessage(mapErrorToMessage(axiosError) || '');
  const description = translateErrorDescription(
    mapErrorToDescrition(axiosError) || '',
  );

  notification.open({
    message: message,
    description: description,
    icon: getAntdIconForType('error'),
    type: 'error',
    duration: 4,
  });
};

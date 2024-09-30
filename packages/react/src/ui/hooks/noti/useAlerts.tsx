// Import necessary modules
import { AxiosError } from 'axios';
import { IError } from 'models/error';
import { mapErrorToDescrition, mapErrorToMessage } from './error';
import { useAlertStore } from './useAlertStore';
import {
  translateErrorDescription,
  translateErrorMessage,
} from './useTranslateError';

// Custom hook for managing alerts
const useAlerts = () => {
  const { addAlert } = useAlertStore();

  // Function to add a success alert
  const addSuccessAlert = (message: string, description?: string) => {
    addAlert({
      type: 'success',
      message,
      description,
      serviceType: 'snackbar',
    });
  };

  // Function to add an error alert
  const addErrorAlert = (errors: unknown) => {
    const axiosError = errors as AxiosError<IError>;

    const message = mapErrorToMessage(axiosError) || '';
    const description = mapErrorToDescrition(axiosError) || '';
    
    addAlert({
      type: 'error',
      message: translateErrorMessage(message),
      description: translateErrorDescription(description),
      serviceType: 'snackbar',
    });
  };

  // Return functions for adding success and error alerts
  return { addSuccessAlert, addErrorAlert };
};

// Export the custom hook
export default useAlerts;

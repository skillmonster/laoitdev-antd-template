import { createContext, useContext, useMemo } from 'react';
import { NotifyAlert } from 'models/noti';

// Define the context for managing alerts
export const AlertContext = createContext<{
  alerts: NotifyAlert[] | null;
  addAlert: (payload: NotifyAlert | NotifyAlert[]) => void;
  removeAlert: () => void;
}>({
  alerts: null,
  addAlert: () => { },
  removeAlert: () => { },
});

// Define a custom hook for accessing alert state and functions
export const useAlertStore = () => {
  const context = useContext(AlertContext);
  return useMemo(() => context, [context]);
};

import { NotifyAlert } from 'models/noti';
import React, { ReactNode, useState } from 'react';
import { AlertContext } from './useAlertStore';

// Define the provider component for managing alerts
export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alerts, setAlerts] = useState<NotifyAlert[]>([]);

  const addAlert = (payload: NotifyAlert | NotifyAlert[]) => {
    setAlerts((prevAlerts) => {
      // Ensure we have an array of alerts to work with
      const newAlerts = Array.isArray(payload) ? payload : [payload];
      // Concatenate the new alerts with the existing ones
      return [...prevAlerts, ...newAlerts];
    });
  };

  const removeAlert = () => {
    // Clear all alerts
    setAlerts([]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

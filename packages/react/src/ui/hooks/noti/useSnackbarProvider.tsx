import { App, notification } from 'antd'; // Import Ant Design's App
import {
  CheckCircleOutlined,
  CloseOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState, useCallback } from 'react';
import { NotifyAlert } from 'models/noti';
import { useAlertStore } from './useAlertStore';

// Helper function to get icons based on type
const getAntdIconForType = (type: unknown) => {
  switch (type) {
    case 'success':
      return <CheckCircleOutlined style={{ color: 'green' }} />;
    case 'error':
      return <CloseOutlined style={{ color: 'red' }} />;
    case 'warning':
      return <WarningOutlined style={{ color: 'orange' }} />;
    default:
      return null;
  }
};

// Helper function for background color based on type
const getAlertType = (type: unknown) => {
  switch (type) {
    case 'success':
      return 'success';
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
    default:
      return 'info';
  }
};

interface Props {
  children: React.ReactNode;
}

const SnackbarProvider: React.FC<Props> = ({ children }) => {
  const { alerts, removeAlert } = useAlertStore();
  const [open, setOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<NotifyAlert | null>(null);

  useEffect(() => {
    if (alerts && alerts.length > 0 && !open && navigator.onLine) {
      const snackbarAlert = alerts.find(
        (alert: NotifyAlert) => alert.serviceType === 'snackbar',
      );
      if (snackbarAlert) {
        setCurrentAlert(snackbarAlert);
        setOpen(true);
      }
    } else if (alerts && alerts.length === 0) {
      setOpen(false);
      setCurrentAlert(null); // Reset currentAlert when there are no alerts
    }
  }, [alerts, open]);

  useEffect(() => {
    if (alerts && alerts.length > 1 && navigator.onLine) {
      removeAlert();
    }
  }, [alerts, removeAlert]);

  const handleClose = useCallback(() => {
    setOpen(false);
    removeAlert();
  }, [removeAlert]);

  // Trigger Ant Design's notification inside the App component context
  useEffect(() => {
    if (open && currentAlert) {
      notification.open({
        message: currentAlert.message,
        description: currentAlert.description,
        icon: getAntdIconForType(currentAlert.type),
        type: getAlertType(currentAlert.type),
        onClose: handleClose,
        duration: 4,
        closeIcon: <CloseOutlined onClick={handleClose} />,
      });
    }
  }, [open, currentAlert, handleClose]);

  return (
    // Wrap everything inside Ant Design's App component
    <App>{children}</App>
  );
};

export default SnackbarProvider;

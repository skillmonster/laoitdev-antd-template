/* eslint-disable react-refresh/only-export-components */

import { Notifications } from '@/models/noti';
import {
  CheckCircleOutlined,
  CloseOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { notification } from 'antd';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Context initialization
const NotificationContext = createContext<{
  addNoti: (notification: Notifications) => void;
}>({
  addNoti: () => {}, // default function, which will be overridden
});

// Helper function to get icons based on alert type
export const getAntdIconForType = (type: Notifications['type']) => {
  switch (type) {
    case 'success':
      return <CheckCircleOutlined style={{ color: 'green' }} />;
    case 'error':
      return <CloseOutlined style={{ color: 'red' }} />;
    case 'warning':
      return <WarningOutlined style={{ color: 'orange' }} />;
    default:
      return null; // Info notifications don't need a specific icon
  }
};

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [noti, setNoti] = useState<Notifications[]>([]); // Manage alert queue
  const [api, contextHolder] = notification.useNotification(); // Ant Design's notification hook

  // Trigger notification whenever a new alert enters the queue
  useEffect(() => {
    const alert = noti[0];

    if (alert) {
      api.open({
        message: alert.message,
        description: alert.description,
        icon: getAntdIconForType(alert.type),
        type: alert.type,
        duration: 4, // Auto-hide after 4 seconds
        closeIcon: <CloseOutlined onClick={() => handleNotiRemoval()} />, // Handle manual close
      });
    }
  }, [noti, api]);

  // Notification context function to add alert
  const addNoti = (notification: Notifications) => {
    console.log('=> Notification Triggered:', notification);
    setNoti((prevNoti) => {
      console.log('Previous noti state:', prevNoti); // Check the previous state
      return [...prevNoti, notification];
    });
  };

  // Function to remove the alert that's currently displayed
  const handleNotiRemoval = () => {
    setNoti((prevNoti) => prevNoti.slice(1)); // Remove the first alert
  };

  const value = useMemo(() => ({ addNoti }), []); // Memoize value to avoid re-renders

  return (
    <NotificationContext.Provider value={value}>
      {contextHolder} {/* Notification context rendering */}
      {children}
    </NotificationContext.Provider>
  );
};

// Custom hook to use the alert context
export const useNotificationStore = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;

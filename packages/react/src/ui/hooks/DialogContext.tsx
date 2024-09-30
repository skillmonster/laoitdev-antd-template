/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useState } from 'react';

// Define the context type
interface DialogContextType {
  openDialog: (key: string) => void;
  closeDialog: () => void;
  isOpen: (key: string) => boolean;
}

// Create the context
const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Custom hook to use the dialog context
export const useDialogContext = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};

// Provider component that wraps your app
export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentDialogKey, setCurrentDialogKey] = useState<string | null>(null);

  // Open dialog by key
  const openDialog = useCallback((key: string) => {
    setCurrentDialogKey(key);
  }, []);

  // Close dialog
  const closeDialog = useCallback(() => {
    setCurrentDialogKey(null);
  }, []);

  // Check if a dialog key is currently open
  const isOpen = useCallback(
    (key: string) => currentDialogKey === key,
    [currentDialogKey],
  );

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog, isOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

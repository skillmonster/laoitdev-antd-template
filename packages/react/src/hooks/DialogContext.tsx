/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useState } from 'react';

// Define the context type
interface DialogContextType {
  openDialog: (key: string, id: string) => void; // Modified to accept `id`
  closeDialog: () => void;
  isOpen: (key: string) => boolean;
  dialogId: string | null; // Expose the `id` associated with the open dialog
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
  const [dialogId, setDialogId] = useState<string | null>(null); // State to hold the current `id`

  // Open dialog by key and id
  const openDialog = useCallback((key: string, id: string) => {
    setCurrentDialogKey(key);
    setDialogId(id);
  }, []);

  // Close dialog and reset id
  const closeDialog = useCallback(() => {
    setCurrentDialogKey(null);
    setDialogId(null); // Reset the `id` when dialog is closed
  }, []);

  // Check if a dialog key is currently open
  const isOpen = useCallback(
    (key: string) => currentDialogKey === key,
    [currentDialogKey],
  );

  return (
    <DialogContext.Provider
      value={{ openDialog, closeDialog, isOpen, dialogId }}
    >
      {children}
    </DialogContext.Provider>
  );
};

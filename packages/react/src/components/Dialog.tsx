import { Button, Modal } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDialogContext } from 'hooks/DialogContext'; // Import the context
import { DialogProps } from 'models/dialog';

const Dialog: React.FC<DialogProps> = ({ title, dialogKey, children }) => {
  const { t } = useTranslation();
  const { isOpen, closeDialog } = useDialogContext(); // Get context for managing dialogs

  return (
    <Modal
      title={title}
      open={isOpen(dialogKey)} // Check if the dialogKey matches the current open dialog
      onCancel={closeDialog}
      footer={[
        <Button key="cancel" onClick={closeDialog}>
          {t('cancel')}
        </Button>,
        <Button key="submit" type="primary" htmlType="submit">
          {t('save')}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default Dialog;

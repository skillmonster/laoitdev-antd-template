import Dialog from 'components/Dialog'; // Assuming Dialog component is defined
import React from 'react';
import { useTranslation } from 'react-i18next';

export const UpdateDialogForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Update Dialog */}
      <Dialog
        dialogKey="edit" // Key associated with this dialog
        title={t('edit')}
      ></Dialog>
    </>
  );
};

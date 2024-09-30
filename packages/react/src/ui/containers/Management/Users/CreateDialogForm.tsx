import Dialog from 'components/Dialog'; // Assuming Dialog component is defined
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CreateDialogForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Create Dialog */}
      <Dialog
        dialogKey="create" // Key associated with this dialog
        title={t('create')}
      >
          
      </Dialog>
    </>
  );
};

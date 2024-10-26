import { createFileRoute } from '@tanstack/react-router';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/_admin/(Management)/users/create')({
  component: () => <CreateDialogForm />,
});

export const CreateDialogForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Update Dialog */}
      <Modal
        title={t('create')}
        open={true}
        footer={[
          <Button
            key="cancel"
            onClick={() => {
              history.back();
            }}
          >
            {t('cancel')}
          </Button>,
          <Button key="submit" type="primary" htmlType="submit">
            {t('save')}
          </Button>,
        ]}
      >
        {/* Your form content here */}
      </Modal>
    </>
  );
};

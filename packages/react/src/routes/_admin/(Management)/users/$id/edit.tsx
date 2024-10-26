import { createFileRoute } from '@tanstack/react-router';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/_admin/(Management)/users/$id/edit')({
  component: () => <UpdateDialogForm />,
});

export const UpdateDialogForm: React.FC = () => {
  const { t } = useTranslation();
  const { id } = Route.useParams();

  return (
    <>
      {/* Update Dialog */}
      <Modal
        title={t('edit')}
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
        {id && <p>{id}</p>}
      </Modal>
    </>
  );
};

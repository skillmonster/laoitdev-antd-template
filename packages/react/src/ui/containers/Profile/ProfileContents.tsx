import { Avatar, Card, Col, Row, Skeleton, Typography } from 'antd';
import { UserProfile } from 'models/profile';
import { useTranslation } from 'react-i18next';
import Container from '../layouts/pageLayout/Container';
import { UserOutlined } from '@ant-design/icons';

interface ProfileContentsProps {
  data: UserProfile | undefined;
  isLoading: boolean;
}

export const ProfileContents: React.FC<ProfileContentsProps> = ({
  data,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <Card>
          <Row align="middle" justify="space-between" gutter={[16, 16]}>
            {/* User avatar and info */}
            <Col
              xs={24}
              md={12}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              {isLoading ? (
                <Skeleton.Avatar active size={46} shape="circle" />
              ) : (
                <Avatar
                  shape="circle"
                  size={{ xs: 64, sm: 64, md: 66, lg: 66 }} // Responsive size
                  icon={<UserOutlined />}
                  src={data?.avatar}
                  style={{
                    marginInline: '20px',
                    width: '56px',
                    height: '56px',
                  }}
                />
              )}
              <div>
                {isLoading ? (
                  <>
                    <Skeleton.Input active style={{ width: 100 }} />
                    <Skeleton.Input active style={{ width: 150 }} />
                  </>
                ) : (
                  <>
                    <Typography.Title level={4} style={{ margin: 0 }}>
                      {data?.firstname} {data?.lastname}
                    </Typography.Title>
                    <Typography.Text
                      type="secondary"
                      style={{ marginTop: '8px' }}
                    >
                      {data?.Department?.displayName}
                    </Typography.Text>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Card>

        {/* User Info */}
        <Card style={{ marginTop: '16px' }}>
          <Typography.Title level={5} style={{ marginBottom: '16px' }}>
            {t('info')}
          </Typography.Title>
          <Row gutter={[16, 16]} align="top">
            {[
              { label: t('phone'), value: data?.phone },
              { label: t('email'), value: data?.email },
              { label: t('gender'), value: data?.gender },
              {
                label: t('position'),
                value: data?.Position?.displayName,
              },
              {
                label: t('department'),
                value: data?.Department?.displayName,
              },
              { label: t('roles'), value: data?.Role?.displayName },
            ].map((item, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={4}>
                {isLoading ? (
                  <Skeleton.Input active />
                ) : (
                  <>
                    <Typography.Text strong>{item.label}</Typography.Text>
                    <br />
                    <Typography.Text>{item.value}</Typography.Text>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </>
  );
};

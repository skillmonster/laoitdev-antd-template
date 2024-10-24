import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Skeleton, Typography } from 'antd';
import Container from 'containers/layouts/pageLayout/Container';
import { useTranslation } from 'react-i18next';
import { user, UserDetailRes } from 'models/users';
import { statusColor, statusLabel } from '@/styles/status';
import useBreakpoint from 'antd/es/grid/hooks/useBreakpoint'; // Import the useBreakpoint hook

interface Props {
  data: UserDetailRes | undefined;
  isLoading: boolean;
}

export const ViewDetails: React.FC<Props> = ({ data, isLoading }) => {
  const { t } = useTranslation();

  // Get current screen sizes using Ant Design Breakpoint Hook
  const screens = useBreakpoint();

  return (
    <>
      <Container>
        <Card>
          {/* Responsive Row and Col for user avatar and information */}
          <Row
            align="middle"
            justify="start"
            gutter={[16, 16]}
            style={{
              textAlign: screens.xs ? 'center' : 'left', // Apply center alignment only on mobile
              justifyContent: screens.xs ? 'center' : 'left', // Apply center alignment only on mobile
            }}
          >
            {/* User avatar and info */}
            <Col
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }} // center avatar on smaller screens
            >
              {isLoading ? (
                <Skeleton.Avatar active size={64} shape="circle" />
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
            </Col>

            {/* User's name and designation */}
            <Col
              xs={24} // Full width on mobile
              sm={24} // Full width on small devices
              md={16} // 2/3rds width on tablets and larger screens
              lg={18} // 3/4th width on large screens
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Align text vertically
              }}
            >
              {isLoading ? (
                <>
                  <Skeleton.Input active style={{ width: 100 }} />
                  <Skeleton.Input active style={{ width: 150, marginTop: 8 }} />
                </>
              ) : (
                <>
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    {user.mapGender.get(data?.gender ?? '')} {data?.firstname}{' '}
                    {data?.lastname}
                  </Typography.Title>
                  <Typography.Text
                    type="secondary"
                    style={{ marginTop: '8px' }}
                  >
                    {data?.Department?.displayName}
                  </Typography.Text>
                </>
              )}
            </Col>
          </Row>
        </Card>

        {/* Info */}
        <Card style={{ marginTop: '16px' }}>
          <Typography.Title level={5} style={{ marginBottom: '16px' }}>
            {t('info')}
          </Typography.Title>
          <Row gutter={[16, 16]} align="top">
            {[
              { label: t('phone'), value: data?.phone },
              { label: t('email'), value: data?.email },
              {
                label: t('position'),
                value: data?.Position?.displayName,
              },
              {
                label: t('department'),
                value: data?.Department?.displayName,
              },
              { label: t('roles'), value: data?.Role?.displayName },
              { label: t('status'), value: data?.status },
            ].map((item, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={4}>
                {isLoading ? (
                  <Skeleton.Input active />
                ) : (
                  <>
                    <Typography.Text strong>{item.label}</Typography.Text>
                    <br />
                    {/* Conditionally rendering status with color */}
                    {item.label === t('status') ? (
                      <Typography.Text
                        style={{ color: statusColor(item.value || '') }}
                      >
                        {statusLabel(item.value || '', t)}
                      </Typography.Text>
                    ) : (
                      <Typography.Text>{item.value}</Typography.Text>
                    )}
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

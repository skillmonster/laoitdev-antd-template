import { Button, Col, Collapse, Form, Input, Row } from 'antd';
import { useUsers } from 'hooks/users/useUsers';
import { useTranslation } from 'react-i18next';
import { IOptionSelected } from '@/models/search';
import { Search } from 'ui/components/Search';
import 'styles/css/Layout.css';

const { Panel } = Collapse;

interface FilterCollapseProps {
  expanded: boolean;
  onFilterSubmit: (value: IOptionSelected) => void;
  handleResetValueFilter?: () => void;
}

export const FilterCollapse: React.FC<FilterCollapseProps> = ({
  expanded,
  onFilterSubmit,
  handleResetValueFilter,
}) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  // Hook to fetch users (with pagination)
  const { optionValue, isLoading, nextPageToken, fetchNextPage } = useUsers(); // This handles fetching users from the API

  const handleResetFormFilter = () => {
    form.resetFields();
    handleResetValueFilter && handleResetValueFilter();
  };

  return (
    <div className="filter-collapse-wrapper">
      <Form form={form} layout="vertical" onFinish={onFilterSubmit}>
        <Collapse activeKey={expanded ? ['1'] : []} ghost>
          <Panel header={false} key="1" showArrow={false}>
            <Row gutter={16}>
              {/* Full Name Search Input */}
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="id" label={t('full_name')}>
                  <Search
                    optionValue={optionValue} // Pass the current user options
                    onFilterSubmit={onFilterSubmit}
                    fetchNextPage={fetchNextPage} // Paginate when scrolling
                    isLoading={isLoading} // Show loading indicator
                    nextPageToken={nextPageToken} // Token for next page
                    placeholder="full_name"
                    name="id"
                  />
                </Form.Item>
              </Col>

              {/* Additional Fields (Phone, Email, etc.) */}
              <Col xs={24} sm={12} md={8}>
                <Form.Item name="phone" label={t('phone')}>
                  <Input placeholder={t('phone')} />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={8}>
                <Form.Item name="email" label={t('email')}>
                  <Input placeholder={t('email')} />
                </Form.Item>
              </Col>
            </Row>

            <Row justify="end">
              <Col>
                <Form.Item>
                  <Button
                    onClick={handleResetFormFilter}
                    style={{ marginRight: 8 }}
                  >
                    {t('reset')}
                  </Button>
                  <Button type="primary" htmlType="submit">
                    {t('search')}
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Form>
    </div>
  );
};

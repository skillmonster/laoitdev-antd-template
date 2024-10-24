import { PaginationType } from '@/models/table';
import { IUsersListRes, UsersList, user } from '@/models/users';
import { localStorageToken } from '@/services/cache';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import {
  Table as AntdTable,
  Avatar,
  Button,
  Col,
  Divider,
  Row,
  Space,
  Tooltip,
  Typography,
  Pagination,
} from 'antd';
import { useDialogContext } from 'hooks/DialogContext';
import { formatDatetime } from 'hooks/Utils';
import { Dispatch, useMemo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CreateDialogForm } from './CreateDialogForm';
import { UpdateDialogForm } from './UpdateDialogForm';

interface TableProps {
  data: UsersList[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  pagination: PaginationType;
  isFetchingNextPage: boolean;
  setPagination: Dispatch<React.SetStateAction<PaginationType>>;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<IUsersListRes, unknown>, Error>
  >;
}

export const Table = ({
  data,
  pagination,
  isLoading,
  isFetchingNextPage,
  fetchNextPage,
  setPagination,
}: TableProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { openDialog } = useDialogContext(); // Get openDialog from context

  // State to store calculated table height based on window size
  const [tableHeight, setTableHeight] = useState<number>(
    window.innerHeight - 300, // Deduct extra space for header, footer, and padding (for example: 300px)
  );

  // Function to dynamically calculate the table height based on viewport height
  const calculateTableHeight = () => {
    const newHeight = window.innerHeight - 300; // Adjust based on actual header/footer height
    setTableHeight(newHeight > 300 ? newHeight : 300); // Set a minimum height to prevent the table from being too small
  };

  // Resize listener to adjust the table height dynamically when window is resized
  useEffect(() => {
    calculateTableHeight(); // Set initial height on component mount

    window.addEventListener('resize', calculateTableHeight);

    return () => window.removeEventListener('resize', calculateTableHeight);
  }, []);

  const columns = useMemo(
    () => [
      {
        title: t('full_name'),
        key: 'fullName',
        render: (row: UsersList) => (
          <Row align="middle" gutter={[16, 16]} style={{ flexWrap: 'nowrap' }}>
            <Col>
              <Avatar
                alt={row.firstName}
                src={`${import.meta.env.VITE_BASE_URL}/v1/users/${row.id}/avatar?accessToken=${localStorageToken.getAccessToken()}`}
              />
            </Col>
            <Col flex="auto">
              <Typography.Text>
                {user.mapGender.get(row.gender)} {row.firstName} {row.lastName}
              </Typography.Text>
            </Col>
          </Row>
        ),
      },
      {
        title: t('email'),
        dataIndex: 'email',
        key: 'email',
        render: (email: string) => email || 'N/A', // Render email
      },
      {
        title: t('phone'),
        dataIndex: 'phone',
        key: 'phone',
        render: (phone: string) => phone || 'N/A', // Render phone
      },
      {
        title: t('roles'),
        dataIndex: 'role',
        key: 'roles',
        render: (role: string) => role || 'N/A', // Render user roles
      },
      {
        title: t('last_update'),
        key: 'last_update',
        render: (row: UsersList) => (
          <Row gutter={[8, 8]} align="middle">
            <Col>{formatDatetime(row.updatedAt)}</Col>
            <Col>
              <Divider type="vertical" />
            </Col>
            <Col>
              <Typography.Text>
                {`${row.updatedBy.firstName} ${row.updatedBy.lastName}`}
              </Typography.Text>
            </Col>
          </Row>
        ),
      },
      {
        title: t('action'),
        key: 'action',
        width: 100,
        render: (row: UsersList) => (
          <Space size="small">
            <Tooltip placement="top" title={t('view')}>
              <Button
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => navigate({ to: `/users/view/${row.id}` })}
              />
            </Tooltip>
            <Tooltip placement="top" title={t('edit')}>
              <Button
                type="primary"
                icon={<EditOutlined />}
                onClick={() => openDialog('edit')}
              />
            </Tooltip>
          </Space>
        ),
      },
    ],
    [navigate, openDialog, t],
  );

  // Handle Ant Design Table pagination options
  const handlePageChange = (page: number, pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: page - 1, // Convert page number to index
      pageSize,
    }));
    fetchNextPage(); // Trigger next page fetch
  };

  return (
    <>
      {/* Main wrapper for content */}
      <div
        style={{
          padding: '24px',
          height: tableHeight - 10,
          overflow: 'hidden',
        }}
      >
        <AntdTable
          columns={columns}
          dataSource={data}
          rowKey={(row: UsersList) => row.id}
          pagination={false} // Disable internal pagination to move it externally
          loading={isLoading || isFetchingNextPage}
          scroll={{ y: tableHeight - 65 }} // Adjust for height, leaving space for headers and pagination
        />
      </div>

      {/* Pagination placed outside of the scrollable table */}
      <div
        style={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Pagination
          current={pagination.pageIndex + 1}
          pageSize={pagination.pageSize}
          total={data.length} // Ensure total number of records is passed to display the correct number of pages
          onChange={handlePageChange}
          showSizeChanger
        />
      </div>

      {/* Render dialog forms */}
      <CreateDialogForm />
      <UpdateDialogForm />
    </>
  );
};

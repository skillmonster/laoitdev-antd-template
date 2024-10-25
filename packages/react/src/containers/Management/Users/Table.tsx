import { TableAntd } from '@/components/Table';
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
  Avatar,
  Button,
  Col,
  Divider,
  Row,
  Space,
  Tooltip,
  Typography,
} from 'antd';
import { useDialogContext } from 'hooks/DialogContext';
import { formatDatetime } from 'hooks/Utils';
import { Dispatch, useMemo } from 'react';
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

  // Define table columns with fixed width for some columns
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
        width: 200, // Set a fixed width to the column
      },
      {
        title: t('email'),
        dataIndex: 'email',
        key: 'email',
        render: (email: string) => email || 'N/A',
        width: 250, // Set a fixed width to the column
      },
      {
        title: t('phone'),
        dataIndex: 'phone',
        key: 'phone',
        render: (phone: string) => phone || 'N/A',
        width: 180, // Set a fixed width to the column
      },
      {
        title: t('roles'),
        dataIndex: 'role',
        key: 'roles',
        render: (role: string) => role || 'N/A',
        width: 180, // Set a fixed width to the column
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
        width: 250, // Set fixed width for the last_update column
      },
      {
        title: t('action'),
        key: 'action',
        width: 150, // Set a fixed width for the action buttons
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

  return (
    <>
      {/* Main wrapper for content */}
      <TableAntd<UsersList>
        columns={columns}
        data={data}
        pagination={pagination}
        setPagination={setPagination}
        fetchNextPage={fetchNextPage}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
      />

      {/* Render dialog forms */}
      <CreateDialogForm />
      <UpdateDialogForm />
    </>
  );
};

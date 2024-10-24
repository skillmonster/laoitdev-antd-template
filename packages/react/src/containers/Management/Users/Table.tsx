import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
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
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Dispatch, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PaginationType } from '@/models/table';
import { IUsersListRes, user, UsersList } from '@/models/users';
import { localStorageToken } from '@/services/cache';
import { muiStyles, tableStyle } from '@/components/TableStyle';
import { useDialogContext } from 'hooks/DialogContext';
import { formatDatetime } from 'hooks/Utils';
import { CreateDialogForm } from './CreateDialogForm';
import { UpdateDialogForm } from './UpdateDialogForm';

interface TableProps {
  users: UsersList[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  pagination: PaginationType;
  isFetchingNextPage: boolean;
  setPagination: Dispatch<React.SetStateAction<PaginationType>>;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<IUsersListRes, unknown>, Error>
  >;
}

export const Table = ({
  users,
  pagination,
  isLoading,
  isFetchingNextPage,
  isError,
  isFetching,
  fetchNextPage,
  setPagination,
}: TableProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { openDialog } = useDialogContext(); // Get openDialog from context

  const columns = useMemo<MRT_ColumnDef<UsersList>[]>(
    () => [
      {
        accessorKey: 'id',
        header: t('id'),
        minSize: 50,
        maxSize: 50,
        enableClickToCopy: true,
        enableEditing: false,
        accessorFn: (row) => row.id || 'N/A',
      },
      {
        accessorKey: 'fullName',
        header: t('full_name'),
        enableClickToCopy: false,
        accessorFn: (row) => row,
        Cell: ({ row }) => (
          <>
            <Row
              align="middle"
              gutter={[16, 16]}
              style={{ flexWrap: 'nowrap' }}
            >
              {/* Avatar */}
              <Col>
                <Avatar
                  alt={row.original.firstName}
                  src={`${import.meta.env.VITE_BASE_URL}/v1/users/${
                    row.original.id
                  }/avatar?accessToken=${localStorageToken.getAccessToken()}`}
                />
              </Col>
              {/* Name and Gender */}
              <Col flex="auto">
                {/* Auto width adjustment */}
                <Typography.Text>
                  {user.mapGender.get(row.original.gender)}{' '}
                  {row.original.firstName} {row.original.lastName}
                </Typography.Text>
              </Col>
            </Row>
          </>
        ),
      },
      {
        accessorKey: 'email',
        header: t('email'),
        enableClickToCopy: true,
        accessorFn: (row) => row.email || 'N/A',
      },
      {
        accessorKey: 'phone',
        header: t('phone'),
        enableClickToCopy: true,
        accessorFn: (row) => row.phone || 'N/A',
      },
      {
        accessorKey: 'roles',
        header: t('roles'),
        enableClickToCopy: true,
        accessorFn: (row) => row.role || 'N/A',
      },

      {
        accessorKey: 'last_update',
        header: t('last_update'),
        enableClickToCopy: true,
        accessorFn: (row) => row,
        Cell: ({ row }) => (
          <Row gutter={[8, 8]} align="middle">
            {/* Updated At */}
            <Col>{formatDatetime(row.original.updatedAt)}</Col>

            {/* Divider */}
            <Col>
              <Divider type="vertical" />
            </Col>

            {/* Updated By */}
            <Col>
              <Typography.Text>
                {`${row.original.updatedBy.firstName} ${row.original.updatedBy.lastName}`}
              </Typography.Text>
            </Col>
          </Row>
        ),
      },
      {
        accessorKey: 'action',
        header: t('action'),
        size: 10,
        accessorFn: (row) => row,
        Cell: ({ row }) => (
          <>
            <Space size="small">
              <Tooltip placement="top" title={t('view')}>
                <Button
                  type="primary"
                  icon={<EyeOutlined />}
                  onClick={() => {
                    navigate({ to: `/users/view/${row.original.id!}` });
                  }}
                />
              </Tooltip>

              <Tooltip placement="top" title={t('edit')}>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => {
                    openDialog('edit');
                  }}
                />
              </Tooltip>
            </Space>
          </>
        ),
      },
    ],
    [navigate, openDialog, t],
  );

  const updatedColumns = useMemo(() => {
    return columns.map((column) => ({
      ...column,
      Header: () => <>{t(column.header)}</>,
    }));
  }, [columns, t]);

  const table = useMaterialReactTable<UsersList>({
    columns: updatedColumns,
    data: users,
    ...tableStyle,
    initialState: {
      columnVisibility: { id: false },
      columnPinning: {
        right: ['action'],
      },
      pagination: {
        pageSize: pagination.pageSize,
        pageIndex: pagination.pageIndex,
      },
    },
    // Adding custom toolbar action (button) at the top
    renderTopToolbarCustomActions: () => (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div
          style={{
            position: 'absolute', // Use absolute positioning.
            right: 0, // Align it to the right.
            top: 0, // Align it to the top of the container.
            marginRight: '-16px', // Optional: Add some padding from the right edge.
            marginTop: '-15px', // Optional: Add some padding from the top edge.
          }}
        >
          <Button
            type="primary"
            onClick={() => {
              openDialog('create');
            }}
            icon={<PlusOutlined />}
          >
            {t('new')}
          </Button>
        </div>
      </div>
    ),
    muiPaginationProps: () => ({
      ...muiStyles.muiPaginationProps,

      // Handling page change as usual
      onChange(_: React.ChangeEvent<unknown>, currentPage: number) {
        const total = users.length || 0;
        const page = total / pagination.pageSize;
        if (page === currentPage) fetchNextPage();
        currentPage = currentPage - 1;
        setPagination({
          ...pagination,
          pageIndex: currentPage,
        });
      },
    }),
    state: {
      isLoading: isLoading || isFetchingNextPage,
      showAlertBanner: isError,
      showProgressBars: isFetching,
      pagination,
    },
  });

  return (
    <>
      <div className="table-wrapper">
        <MaterialReactTable table={table} />
      </div>

      {/* Render dialogs */}
      <CreateDialogForm />

      <UpdateDialogForm />
    </>
  );
};

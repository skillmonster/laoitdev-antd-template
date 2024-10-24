import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Breadcrumbs from 'containers/layouts/pageLayout/Breadcrumbs';
import PageLayout from 'containers/layouts/pageLayout/PageLayout';
import { FilterCollapse } from 'containers/Management/Users/FilterCollapse';
import { Table } from 'containers/Management/Users/Table';
import { useFilterCollapse } from 'hooks/filter/useFilterCollapse';
import { useUsers } from 'hooks/users/useUsers';
import 'styles/css/Layout.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin/(Management)/users/')({
  component: () => <Users />,
});

const Users: React.FC = () => {
  // Breadcrumbs
  const breadcrumbs = [
    { title: 'management' },
    { title: 'user_management', link: '/users' },
  ];

  // Hooks Filter Collapse
  const { expanded, showFilterIcon, handleOpenCollapse } = useFilterCollapse();

  // Hooks Table
  const {
    // Data
    users,
    isLoading,
    isError,
    isFetching,

    // pagination
    fetchNextPage,
    isFetchingNextPage,
    pagination,
    setPagination,

    // Event handlers
    onFilterSubmit,
    handleResetValueFilter,
  } = useUsers();

  return (
    <PageLayout
      breadcrumb={<Breadcrumbs items={breadcrumbs} />}
      title="user_management"
      filterButton={
        <>
          {/* Collapse Button UI*/}
          <Button className="filter-button" onClick={handleOpenCollapse}>
            {showFilterIcon ? <SearchOutlined /> : <CloseOutlined />}
          </Button>
        </>
      }
    >
      {/* Filter Collapse UI*/}
      <FilterCollapse
        expanded={expanded}
        onFilterSubmit={onFilterSubmit}
        handleResetValueFilter={handleResetValueFilter}
      />

      {/* Table UI */}
      <Table
        // Data
        data={users}
        // Pass data and pagination
        isLoading={isLoading}
        isError={isError}
        isFetching={isFetching}
        // Pagination controls
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        pagination={pagination}
        setPagination={setPagination}
      />
    </PageLayout>
  );
};

export default Users;

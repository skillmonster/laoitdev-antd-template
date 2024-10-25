import { useDynamicTableHeight } from '@/hooks/useDynamicTableHeight';
import { PaginationType } from '@/models/table';
import { Table as AntdTable } from 'antd';
import { ColumnsType } from 'antd/es/table';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { Dispatch } from 'react';

// Updated TableAntd component with generic type support
interface TableProps<TData> {
  columns?: ColumnsType<TData>;
  data: TData[];
  pagination: PaginationType;
  setPagination: Dispatch<React.SetStateAction<PaginationType>>;
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<unknown>, Error>>;
  isLoading?: boolean;
  isFetchingNextPage?: boolean;
}

// Adding generic type TData for table data type
export const TableAntd = <TData extends { id: string }>({
  columns,
  data,
  pagination,
  setPagination,
  fetchNextPage,
  isLoading,
  isFetchingNextPage,
}: TableProps<TData>) => {
  // Get dynamic table height based on window size
  const tableHeight = useDynamicTableHeight(300);

  // Handle Ant Design Table pagination options
  const handlePageChange = (page: number, pageSize: number) => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: page - 1,
      pageSize,
    }));
    fetchNextPage(); // Trigger fetching the next page of data
  };

  return (
    <div
      style={{
        padding: '0 16px',
        height: tableHeight + 10,
        marginBottom: '20px',
      }}
    >
      <AntdTable<TData>
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.id} // Generic type TData must have 'id'
        pagination={{
          pageSize: pagination.pageSize,
          total: data.length, // Provide total records for correct pagination display
          onChange: handlePageChange,
          current: pagination.pageIndex + 1,
        }}
        loading={isLoading || isFetchingNextPage}
        scroll={{ x: 'calc(700px + 50%)', y: tableHeight - 65 }}
      />
    </div>
  );
};

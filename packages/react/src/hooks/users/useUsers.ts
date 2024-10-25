import { useInfiniteQuery } from "@tanstack/react-query";
import { PaginationType } from "models/table";
import { IUsersListParam, IUsersListRes } from "models/users";
import { useMemo, useState } from "react";
import { getUserList } from "services/https/users";
import { usersKeys } from ".";

export const useUsers = () => {
  // State variables
  const [valueFilter, setValueFilter] = useState<IUsersListParam['queryParam'] | null>(null);

  const defaultPagination = { pageIndex: 0, pageSize: 25 };
  const [pagination, setPagination] =
    useState<PaginationType>(defaultPagination);


  // Filter Submit
  const onFilterSubmit = (values: IUsersListParam['queryParam'] | string | number | null | undefined) => {
    setValueFilter(values as IUsersListParam['queryParam']);
    setPagination(defaultPagination); // Reset to pageIndex 0
  };

  // Get user list
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<IUsersListRes, Error>({
    queryKey: usersKeys.list({
      ...valueFilter
    }, pagination.pageSize, pagination.pageIndex),

    queryFn: async ({ pageParam: nextPageToken }) => getUserList({
      queryParam: {
        ...valueFilter
      },
      pagination: {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize * 2,
        nextPageToken: nextPageToken as string,
      },
    }),
    staleTime: Infinity,
    initialPageParam: '',
    getNextPageParam: (lastPage) => {
      if (lastPage.nextPageToken) return lastPage.nextPageToken;
    },
  });

  const users = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );

  const nextPageToken = useMemo(
    () => data?.pages[data?.pages.length - 1]?.nextPageToken || '',
    [data]
  );


  const handleResetValueFilter = () => {
    setValueFilter(null);
    setPagination(defaultPagination);
  };

  // Options and Infinite Scroll
  const optionValue = useMemo(() => {
    return users.map((item) => ({
      label: `${item?.gender} ${item?.firstName} ${item?.lastName}`,
      value: item?.id,
    }));
  }, [users]);


  return {
    users,
    isLoading,
    isError,

    // pagination
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    pagination,
    setPagination,
    nextPageToken,

    // UI state
    valueFilter,
    optionValue,

    // Event handlers
    onFilterSubmit,
    handleResetValueFilter,
  };
};
import { IUsersListParam } from "@/models/users";

export const usersKeys = {
  all: ['usersKeys'] as const,
  lists: () => [usersKeys.all, 'lists'] as const,
  list: (filters?: IUsersListParam['queryParam'], pageSize?: number, pageIndex?: number) => [usersKeys.lists(), filters, pageSize, pageIndex] as const,
  details: () => [...usersKeys.all, 'details'] as const,
  detail: (id: string) => [...usersKeys.details(), id] as const,
};

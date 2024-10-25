import { useQuery } from "@tanstack/react-query";
import { getUserDetail } from "services/https/users";
import { usersKeys } from ".";

export const useUserDetails = (id: string) => {

  // Get User Detail Data
  const { data: userDetail, isLoading } = useQuery({
    queryKey: usersKeys.detail(id),
    queryFn: () => getUserDetail(id),
    staleTime: Infinity,
    enabled: !!id,
  });

  return {
    userDetail,
    isLoading
  };
};
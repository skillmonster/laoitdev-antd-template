import useNoti from "hooks/noti/useNoti";
import { useQuery } from "@tanstack/react-query";
import { getUserDetail } from "services/https/users";
import { usersKeys } from ".";

export const useUserDetails = (id: string) => {
  const { addErrorNoti } = useNoti();

  // Get User Detail Data
  const { data: userDetail, isLoading } = useQuery({
    queryKey: usersKeys.detail(id),
    queryFn: () => {
      try {
        return getUserDetail(id);
      } catch (error) {
        addErrorNoti(error);
      }
    },
    staleTime: Infinity,
    enabled: !!id,
  });

  return {
    userDetail,
    isLoading
  };
};
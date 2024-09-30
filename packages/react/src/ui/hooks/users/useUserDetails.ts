import { useQuery } from "@tanstack/react-query";
import useAlerts from 'hooks/noti/useAlerts';
import { getUserDetail } from "services/https/users";
import { usersKeys } from ".";

export const useUserDetails = (id: string) => {
  const { addErrorAlert } = useAlerts();

  // Get User Detail Data
  const { data: userDetail, isLoading } = useQuery({
    queryKey: usersKeys.detail(id),
    queryFn: () => {
      try {
        return getUserDetail(id);
      } catch (error) {
        addErrorAlert(error);
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
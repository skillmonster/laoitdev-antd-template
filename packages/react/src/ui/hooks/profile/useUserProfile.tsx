import { useQuery } from '@tanstack/react-query';
import useAlerts from 'hooks/noti/useAlerts';
import { getUserProfile } from 'services/https/profile';
import { userProfileKey } from '.';

export const useUserProfile = () => {
  const { addErrorAlert } = useAlerts();

  // Fetch user profile data using useQuery
  const {
    data: userInfo,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: userProfileKey.lists(),
    staleTime: Infinity,
    queryFn: () => {
      try {
        return getUserProfile();
      } catch (error) {
        addErrorAlert(error);
      }
    },
  });

  return {
    // User Info
    userInfo,
    isLoading,
    isError,
    isSuccess,
  };
};

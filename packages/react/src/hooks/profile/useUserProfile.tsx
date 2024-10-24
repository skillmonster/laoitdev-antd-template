import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from 'services/https/profile';
import { userProfileKey } from '.';
import useNoti from '../noti/useNoti';

export const useUserProfile = () => {
  const { addErrorNoti } = useNoti();

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
        addErrorNoti(error);
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

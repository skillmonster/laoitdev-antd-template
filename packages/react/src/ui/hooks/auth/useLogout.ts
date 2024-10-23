import { handleTokenError } from "@/services/cache";
import { logoutCallApi } from "@/services/https/auth";
import useNoti from "@/ui/hooks/noti/useNoti";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export const useLogout = () => {
  const { addErrorNoti } = useNoti();

  const navigate = useNavigate();

  const { mutate: actionLogout } = useMutation<void, Error>({
    mutationFn: logoutCallApi,
    onSuccess: async () => {
      handleTokenError();
      navigate({ to: "/login" });
    },
    onError: addErrorNoti,
  });

  const handleLogout = () => {
    handleTokenError();
    navigate({ to: "/login" });
  };

  return {
    actionLogout,
    handleLogout
  };
};
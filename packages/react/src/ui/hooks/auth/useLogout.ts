import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import useAlerts from 'hooks/noti/useAlerts';
import { handleTokenError } from "@/services/cache";
import { logoutCallApi } from "@/services/https/auth";

export const useLogout = () => {
  const { addErrorAlert } = useAlerts();

  const navigate = useNavigate();

  const { mutate: actionLogout } = useMutation<void, Error>({
    mutationFn: logoutCallApi,
    onSuccess: async () => {
      handleTokenError();
      navigate({ to: "/login" });
    },
    onError: addErrorAlert,
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
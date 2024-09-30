import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { IAuth, LoginData } from "@/models/auth";
import { localStorageToken } from "@/services/cache";
import { loginCallApi } from "@/services/https/auth";
import useAlerts from "../noti/useAlerts";
import { useNavigate } from "@tanstack/react-router";

export const useLogin = () => {
     const { t } = useTranslation();
     const { addSuccessAlert, addErrorAlert } = useAlerts();
     const navigate = useNavigate();

     // Mutation for Login
     const { mutate: actionLogin, status: statusLogin, isSuccess: isSuccessLogin } = useMutation<LoginData, Error, IAuth>({
          mutationFn: loginCallApi,
          onSuccess: async (token: LoginData) => {
               localStorageToken.setToken({
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
               });

               navigate({ to: "/" });

               addSuccessAlert(t("login_successfully"), t("welcome"));
          },
          onError: addErrorAlert,
     });

     const handleLogin = (value: IAuth) => {
          actionLogin(value);
     };

     return {
          handleLogin,

          // Mutation status
          statusLogin,
          isSuccessLogin,
     };
}
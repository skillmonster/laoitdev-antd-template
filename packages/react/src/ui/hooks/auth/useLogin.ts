import { IAuth, LoginData } from "@/models/auth";
import { localStorageToken } from "@/services/cache";
import { loginCallApi } from "@/services/https/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import useNoti from "../noti/useNoti";

export const useLogin = () => {
     const { t } = useTranslation();
     const { addSuccessNoti, addErrorNoti } = useNoti();
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

               addSuccessNoti(t("login_successfully"), t("welcome"));
          },
          onError: addErrorNoti,
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
};
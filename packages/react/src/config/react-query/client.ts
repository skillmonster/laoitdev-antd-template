import { mapErrorToDescrition, mapErrorToMessage } from "@/hooks/noti/error";
import { getAntdIconForType } from "@/hooks/noti/useNotificationProvider";
import { translateErrorDescription, translateErrorMessage } from "@/hooks/noti/useTranslateError";
import { IError } from "@/models/error";
import { QueryClient } from "@tanstack/react-query";
import { notification } from "antd";
import { AxiosError } from "axios";

// Modify Client to initialize queryClient
const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false, // No retries for queries by default
        staleTime: 1000 * 60 * 5, // Cache time or stale time for queries
      },
      mutations: {
        onError: (error) => {
          const axiosError = error as AxiosError<IError>;

          const message = translateErrorMessage(mapErrorToMessage(axiosError) || '');
          const description = translateErrorDescription(
            mapErrorToDescrition(axiosError) || '',
          );

          notification.open({
            message: message,
            description: description,
            icon: getAntdIconForType('error'),
            type: 'error',
            duration: 4, // Auto-hide after 4 seconds
          });

        },
      },
    },
  });
};


// Initialize query client with global error handler
export const queryClient = createQueryClient();

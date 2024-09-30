import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { App as AntdApp, ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { themes } from 'theme/themeConfig';
import i18n from 'ui/config/i18n';
import { queryClient } from 'ui/config/react-query/client';
import { ThemeProvider } from 'ui/containers/layouts/admin/ThemeContext';
import { DialogProvider } from 'ui/hooks/DialogContext';
import { AlertProvider } from 'ui/hooks/noti/useAlertProvider';
import SnackbarProvider from 'ui/hooks/noti/useSnackbarProvider';
import 'ui/styles/css/App.css';
import { router } from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themes}>
        <AntdApp>
          <ThemeProvider>
            <I18nextProvider i18n={i18n}>
              <AlertProvider>
                <SnackbarProvider>
                  <DialogProvider>
                    <RouterProvider router={router} />
                  </DialogProvider>
                </SnackbarProvider>
              </AlertProvider>
            </I18nextProvider>
          </ThemeProvider>
        </AntdApp>
      </ConfigProvider>

      {/* Add React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

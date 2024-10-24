import NotificationProvider from 'hooks/noti/useNotificationProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { themes } from '@/styles/theme/themeConfig';
import i18n from '@/config/i18n';
import { queryClient } from '@/config/react-query/client';
import { ThemeModeProvider } from 'containers/layouts/admin/ThemeContext';
import { DialogProvider } from 'hooks/DialogContext';
import 'styles/css/App.css';
import { router } from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themes}>
        <ThemeModeProvider>
          <I18nextProvider i18n={i18n}>
            <NotificationProvider>
              <DialogProvider>
                <RouterProvider router={router} />
              </DialogProvider>
            </NotificationProvider>
          </I18nextProvider>
        </ThemeModeProvider>
      </ConfigProvider>

      {/* Add React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

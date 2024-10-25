import i18n from '@/config/i18n';
import { themes } from '@/styles/theme/themeConfig';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { ConfigProvider } from 'antd';
import { ThemeModeProvider } from 'containers/layouts/admin/ThemeContext';
import NotificationProvider from 'hooks/noti/useNotificationProvider';
import { I18nextProvider } from 'react-i18next';
import 'styles/css/App.css';
import { queryClient } from './config/react-query/client';
import { router } from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themes}>
        <ThemeModeProvider>
          <I18nextProvider i18n={i18n}>
            <NotificationProvider>
              <RouterProvider router={router} />
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

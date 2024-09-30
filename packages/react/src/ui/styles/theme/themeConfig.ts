import type { ThemeConfig } from 'antd';
import themeToken from './theme.json';


const themeMode = 'light';

const fontFamily = 'Roboto, Noto Sans Lao, sans-serif';

const themes: ThemeConfig = {
     token: {
          colorPrimary: themeToken.token.colorPrimary,
          colorBgLayout: themeToken.token.colorBgLayout,
          colorLink: themeToken.token.colorLink,
          colorSuccess: themeToken.token.colorSuccess,
          colorWarning: themeToken.token.colorWarning,
          colorError: themeToken.token.colorError,
          colorText: themeToken.token.colorText,
          colorBgContainer: themeToken.token.colorBgContainer,
          boxShadow: themeToken.token.boxShadow,
          colorBorderSecondary: themeToken.token.colorBorderSecondary,
          borderRadius: themeToken.token.borderRadius,
          colorIcon: themeToken.token.colorIcon,
          colorBgBase: themeToken.token.colorBgBase,
     },
     components: {
          Input: {
               // Input styles height
               controlHeight: 38,
          },
          Button: {
               colorPrimary: themeToken.components.Button.colorPrimary,
               colorPrimaryActive: themeToken.components.Button.colorPrimaryActive,
          },
     },
};

export {
     themes,
     themeMode,
     fontFamily
};


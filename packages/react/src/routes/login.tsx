import { createFileRoute } from '@tanstack/react-router';
import { Col, Image, Layout, Menu, Row } from 'antd';
import LanguageIconLight from 'assets/LanguageIconLight.png';
import LanguageIconDark from 'assets/LanguageIconDark.svg';
import ChangeLanguage from 'containers/layouts/ChangeLanguage';
import { LoginForm } from 'containers/Login/LoginForm';
import { useLogin } from 'hooks/auth/useLogin';
import 'styles/css/Login.css';
import { useTheme } from '@/containers/layouts/admin/ThemeContext';

export const Route = createFileRoute('/login')({
  component: () => <Login />,
});

const { SubMenu } = Menu;

const Login: React.FC = () => {
  const { handleLogin } = useLogin();
  const { isDark } = useTheme();

  return (
    <Layout className="login-background">
      <Row justify="end" gutter={[24, 12]}>
        <Col>
          <Menu mode="vertical" className="menu custom-menu">
            <SubMenu
              key="sub1"
              title={
                <Image
                  src={isDark ? LanguageIconDark : LanguageIconLight}
                  preview={false}
                  height={18}
                  style={{ marginBottom: '5px' }}
                />
              }
            >
              <ChangeLanguage />
            </SubMenu>
          </Menu>
        </Col>
      </Row>

      <LoginForm handleLogin={handleLogin} />
    </Layout>
  );
};

export default Login;

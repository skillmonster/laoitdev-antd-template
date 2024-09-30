import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { createFileRoute } from '@tanstack/react-router';
import { Col, Layout, Menu, Row } from 'antd';
import ChangeLanguage from 'containers/layouts/ChangeLanguage';
import { useLogin } from 'hooks/auth/useLogin';
import { LoginForm } from 'ui/containers/Login/LoginForm';
import 'styles/css/Login.css';

export const Route = createFileRoute('/login')({
  component: () => <Login />,
});

const { SubMenu } = Menu;

const Login: React.FC = () => {
  const { handleLogin } = useLogin();

  return (
    <Layout className="login-background">
      <Row justify="end" gutter={[24, 12]}>
        <Col>
          <Menu mode="vertical" className="menu custom-menu">
            <SubMenu
              title={
                <TranslateOutlinedIcon
                  sx={{ fontSize: '1.3rem', marginBottom: '-5px' }}
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

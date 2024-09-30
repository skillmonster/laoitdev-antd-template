import { useNavbarMenu } from '@/ui/hooks/layouts/useNavbarMenu';
import { useUserProfile } from '@/ui/hooks/profile/useUserProfile';
import { MenuFoldOutlined, UserOutlined } from '@ant-design/icons'; // Updated: Now using "Menu" icon
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import { Link } from '@tanstack/react-router';
import {
  Menu as AntdMenu,
  Avatar,
  Button,
  Col,
  Drawer,
  Image,
  Layout,
  Row,
} from 'antd';
import 'antd/dist/reset.css'; // Ant Design reset styles
import LogoDark from 'assets/LaoITDevLogoDark.png';
import LogoLight from 'assets/LaoITDevLogoLight.png';
import { t } from 'i18next';
import React from 'react';
import { themes } from 'theme/themeConfig';
import ChangeLanguage from '../ChangeLanguage';
import {
  menuItems,
  renderMenuItems,
  renderMenuItemsWithClose,
} from '../admin/MenuItems';
import ProfileDropdown from '../admin/ProfileDropdown';
import { useTheme } from '../admin/ThemeContext';
import ThemeSwitcher from '../admin/ThemeSwitcher';

const { Header } = Layout;
const { SubMenu } = AntdMenu;

export const Navbar: React.FC = () => {
  const { userInfo } = useUserProfile();
  const { isDark } = useTheme();

  const {
    // State Variables
    drawerVisible,
    showDrawer,
    closeDrawer,

    // Keep track of current route
    pathname,
  } = useNavbarMenu();

  return (
    <>
      <Header
        style={{
          backgroundColor: themes.token?.colorBgContainer,
          padding: '0 0 0 0',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          width: '100%',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
          borderBottom: '0.5px solid #DEDEDE',
        }}
      >
        <Row justify="space-between">
          {/* Left Section: App Logo */}
          <Col>
            <Link to="/">
              <Image
                src={isDark ? LogoLight : LogoDark}
                preview={false}
                height={50}
                style={{
                  marginLeft: '10px',
                  marginTop: '-2px',
                }}
              />
            </Link>
          </Col>

          <div style={{ marginLeft: '30px' }} />

          {/* Full Desktop Menu */}
          <Col flex="auto" className="desktop-menu">
            <AntdMenu
              mode="horizontal"
              selectedKeys={[pathname]}
              style={{
                borderRight: 'none', // Remove the right border (default Antd style)
              }}
            >
              {/* Render Menu Items (Dropdowns) */}
              {renderMenuItems(menuItems)}

              {/* Profile SubMenu */}
              <SubMenu
                key="profile_sub_menu"
                style={{ marginLeft: 'auto' }}
                title={
                  <>
                    <Avatar
                      shape="circle"
                      size="large"
                      icon={<UserOutlined />}
                      src={userInfo?.avatar}
                      style={{ marginInline: '10px' }}
                    />
                    <span style={{ fontSize: '15px', marginRight: '2px' }}>
                      {userInfo?.firstname}
                    </span>
                  </>
                }
              >
                <ProfileDropdown />
              </SubMenu>

              {/* Change Language SubMenu */}
              <SubMenu
                title={
                  <TranslateOutlinedIcon
                    sx={{ fontSize: '1.3rem', marginBottom: '-5px' }}
                  />
                }
              >
                <ChangeLanguage />
              </SubMenu>

              {/* Theme Switcher */}
              <AntdMenu.Item
                key="theme_switcher"
                style={{ padding: '0 10 0 0', marginTop: '-4px' }}
              >
                <ThemeSwitcher />
              </AntdMenu.Item>
            </AntdMenu>
          </Col>

          {/* Menu Icon Button for Mobile */}
          <div className="mobile-menu-button" style={{ paddingRight: '10px' }}>
            <Button
              type="text"
              icon={
                <MenuFoldOutlined
                  style={{ fontSize: '18px', color: themes.token?.colorIcon }}
                />
              }
              onClick={showDrawer}
            />
          </div>
        </Row>
      </Header>

      {/* Mobile Drawer Component */}
      <Drawer
        title={t('menu')}
        placement="right"
        onClose={closeDrawer} // Close the drawer when closing manually
        open={drawerVisible} // Visibility controlled by state
      >
        <AntdMenu
          mode="inline" // Set the mobile menu to "inline" for collapsible submenus
          defaultSelectedKeys={[pathname]}
          style={{
            backgroundColor: themes.token?.colorBgBase,
            paddingBottom: 10,
            overflowY: 'auto', // Allows the drawer content to scroll
            height: '100%', // Full mobile height
            borderRight: 'none',
          }}
        >
          {/* Render Menu Items inside Drawer with auto-close functionality */}
          {renderMenuItemsWithClose(menuItems)}

          {/* Collapsible Profile SubMenu for Mobile */}
          <SubMenu
            key="profile_sub_menu_mobile"
            title={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'right',
                  justifyContent: 'right',
                }}
              >
                <Avatar
                  shape="circle"
                  size="large"
                  icon={<UserOutlined />}
                  src={userInfo?.avatar}
                  style={{ marginRight: '10px' }}
                />
                <span style={{ fontSize: '15px', textAlign: 'right' }}>
                  {userInfo?.firstname}
                </span>
              </div>
            }
          >
            <ProfileDropdown />
          </SubMenu>

          {/* Collapsible Change Language SubMenu for Mobile */}
          <SubMenu
            key="change_language_submenu_mobile"
            title={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'right',
                  justifyContent: 'right',
                }}
              >
                <TranslateOutlinedIcon sx={{ fontSize: '1.3rem' }} />
              </div>
            }
          >
            <ChangeLanguage />
          </SubMenu>

          {/* Theme Switcher Menu Item inside Mobile Drawer */}
          <AntdMenu.Item
            key="theme_switcher_mobile"
            style={{
              padding: '0 10 0 0',
              marginTop: '-4px',
              textAlign: 'right',
            }}
          >
            <ThemeSwitcher />
          </AntdMenu.Item>
        </AntdMenu>
      </Drawer>

      {/* Media Queries for Mobile */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none; /* Hide desktop menu on smaller screens */
          }
          .mobile-menu-button {
            display: block; /* Show icon on smaller screens */
          }
        }

        @media (min-width: 769px) {
          .mobile-menu-button {
            display: none; /* Hide icon on desktop screens */
          }
        }
      `}</style>
    </>
  );
};

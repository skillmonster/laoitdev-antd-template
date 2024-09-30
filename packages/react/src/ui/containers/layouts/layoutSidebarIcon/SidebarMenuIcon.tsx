import { Link, useLocation } from '@tanstack/react-router';
import { Affix, Col, Image, Layout, Menu, Row } from 'antd';
import LogoDark from 'assets/LaoITDevLogoDark.png';
import LogoLight from 'assets/LaoITDevLogoLight.png';
import React from 'react';
import { themes, themeMode } from 'theme/themeConfig';
import { useTheme } from '../admin/ThemeContext';
import { menuItems, renderMenuItems } from '../admin/MenuItems';

const { Sider } = Layout;

interface Props {
  collapsed: boolean;
  onCollapse: () => void;
}

export const SidebarMenuIcon: React.FC<Props> = (prop) => {
  const { pathname } = useLocation();
  const { isDark } = useTheme();

  return (
    <Sider
      theme={themeMode}
      width={240}
      collapsible
      collapsed={prop.collapsed}
      collapsedWidth={45}
      breakpoint="lg"
      onCollapse={prop.onCollapse}
      style={{
        height: '100vh', // Full height
        position: 'fixed', // Make the Sider fixed on the viewport
        left: 0,
        top: 0,
        bottom: 0,
        overflowY: 'auto', // Enable vertical scrolling in the Sider when content overflows
        zIndex: 1000, // Ensure this fixed Sider is above other content
      }}
    >
      <Affix
        offsetTop={0}
        style={{
          zIndex: 10,
          backgroundColor: themes.token?.colorBgContainer,
          marginBottom: 12,
        }}
      >
        <Row justify="center" style={{ margin: 1 }}>
          <Col>
            <Link to="/">
              <Image
                src={isDark ? LogoLight : LogoDark}
                preview={false}
                height={prop.collapsed ? '100%' : 50}
              />
            </Link>
          </Col>
        </Row>
      </Affix>

      <Menu
        mode="inline"
        defaultSelectedKeys={[pathname]}
        style={{
          borderRight: 0,
          paddingBottom: 50,
          backgroundColor: themes.token?.colorBgContainer,
          overflowY: 'auto', // Allow this section to scroll
          height: 'calc(100vh - 110px)', // Adjust height to account for sticky elements (logo and divider)
        }}
      >
        {renderMenuItems(menuItems)}
      </Menu>
    </Sider>
  );
};

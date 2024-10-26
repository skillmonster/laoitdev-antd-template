import { Breadcrumb, Typography, theme } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as AntdLink } from '@tanstack/react-router'; // Assuming this is a custom Link component from TanStack router.
import { BreadcrumbsProps } from 'models/breadcrumb';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { t } = useTranslation();
  const { token } = theme.useToken(); // Using Ant Design's token for theme

  // Map breadcrumb items to the structure Babylon expects
  const breadcrumbItems = items?.map((item) => {
    if (item?.link) {
      return {
        title: (
          <AntdLink
            to={item.link}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: token.colorText,
            }}
          >
            {item.icon &&
              React.cloneElement(item.icon, {
                style: { fontSize: 'small', marginRight: 8 },
              })}
            <Typography.Text>{t(item.title)}</Typography.Text>
          </AntdLink>
        ),
      };
    } else {
      return {
        title: (
          <Typography.Text
            style={{
              display: 'flex',
              alignItems: 'center',
              color: token.colorText,
            }}
          >
            {item.icon &&
              React.cloneElement(item.icon, {
                style: { fontSize: 'small', marginRight: 8 },
              })}
            {t(item.title)}
          </Typography.Text>
        ),
      };
    }
  });

  return (
    <Breadcrumb
      style={{ margin: '-12px 0 14px 0' }}
      separator={<span> / </span>} // Custom slash separator
      items={breadcrumbItems} // Pass our transformed breadcrumb items
    />
  );
};

export default Breadcrumbs;

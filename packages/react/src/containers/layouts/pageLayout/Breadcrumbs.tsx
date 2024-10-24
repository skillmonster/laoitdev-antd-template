import { Link as AntdLink } from '@tanstack/react-router';
import { Breadcrumb, Typography } from 'antd'; // Ant Design Components
import { BreadcrumbsProps } from 'models/breadcrumb';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { themes } from '@/styles/theme/themeConfig';

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  return (
    <Breadcrumb
      style={{
        margin: '-12px 0 14px 0',
        color: themes.token?.colorText, // Custom styling from theme setting if preferred
      }}
      separator={<span style={{ color: themes.token?.colorText }}> / </span>} // Slash separator
    >
      {items?.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {/* If the breadcrumb item is clickable (has link), render with <AntdLink> */}
          {item?.link ? (
            <AntdLink
              to={item.link}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: themes.token?.colorText,
              }}
            >
              {item?.icon &&
                React.cloneElement(item?.icon, {
                  style: { fontSize: 'small', marginRight: 8 },
                })}

              {/* Render translated title */}
              <Typography.Text style={{ color: themes.token?.colorText }}>
                {t(item.title)}
              </Typography.Text>
            </AntdLink>
          ) : (
            // Non-clickable item (no link)
            <Typography.Text
              style={{
                color: themes.token?.colorText,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item?.icon &&
                React.cloneElement(item?.icon, {
                  style: { fontSize: 'small', marginRight: 8 },
                })}
              {t(item.title)}
            </Typography.Text>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

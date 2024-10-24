import { TFunction } from "i18next";

export const statusColor = (status: string) => {
  switch (status) {
    case 'ACTIVE':
      return '#4CAF50';
    case 'INACTIVE':
      return '#D32F2F';
    default:
      return '#424242';
  }
};


export const statusLabel = (status: string, t: TFunction<'translate', undefined>) => {
  switch (status) {
    case 'ACTIVE':
      return t('active');
    case 'INACTIVE':
      return t('inactive');
    default:
      return status;
  }
};
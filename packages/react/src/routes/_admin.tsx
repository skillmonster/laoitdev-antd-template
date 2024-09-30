import { createFileRoute, redirect } from '@tanstack/react-router';
import { localStorageToken } from 'services/cache';

export const Route = createFileRoute('/_admin')({
  beforeLoad: () => {
    if (!localStorageToken.getAccessToken()) {
      throw redirect({ to: '/login' });
    }
  },
});

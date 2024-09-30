import { createFileRoute } from '@tanstack/react-router';
import Dashboard from './dashboard';

export const Route = createFileRoute('/_admin/')({
  component: Dashboard,
});

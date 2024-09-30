import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_admin/dashboard/')({
  component: () => <Dashboard />,
});

const Dashboard: React.FC = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

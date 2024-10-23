import { createFileRoute } from '@tanstack/react-router';
import Breadcrumbs from 'containers/layouts/pageLayout/Breadcrumbs';
import PageLayout from 'containers/layouts/pageLayout/PageLayout';
import { useUserDetails } from 'hooks/users/useUserDetails';
import { ViewDetails } from 'containers/Management/Users/ViewDetails';

export const Route = createFileRoute('/_admin/(Management)/users/view/$id')({
  component: () => <View />,
});

const View: React.FC = () => {
  const breadcrumbs = [
    { title: 'management' },
    { title: 'user_management', link: '/users' },
    { title: 'view', link: '/users/view/$id' },
  ];

  const { userDetail, isLoading } = useUserDetails(Route.useParams().id);

  return (
    <PageLayout
      breadcrumb={<Breadcrumbs items={breadcrumbs} />}
      title="profile"
      paperContent={false}
    >
      <ViewDetails data={userDetail} isLoading={isLoading} />
    </PageLayout>
  );
};

export default View;

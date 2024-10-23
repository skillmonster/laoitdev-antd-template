import { createFileRoute } from '@tanstack/react-router';
import Breadcrumbs from 'containers/layouts/pageLayout/Breadcrumbs';
import PageLayout from 'containers/layouts/pageLayout/PageLayout';
import { ProfileContents } from 'containers/Profile/ProfileContents';
import { useUserProfile } from 'hooks/profile/useUserProfile';

export const Route = createFileRoute('/_admin/profile/')({
  component: () => <Profile />,
});

const Profile: React.FC = () => {
  const breadcrumbs = [{ title: 'profile', link: '/profile' }];

  const {
    // User Info
    userInfo,
    isLoading,
  } = useUserProfile();

  return (
    <PageLayout
      breadcrumb={<Breadcrumbs items={breadcrumbs} />}
      title="profile"
      paperContent={false}
    >
      <ProfileContents data={userInfo} isLoading={isLoading} />
    </PageLayout>
  );
};

export default Profile;

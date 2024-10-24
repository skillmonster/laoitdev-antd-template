import { createRouter as createReactRouter } from '@tanstack/react-router';
import { PageNotFound } from '@/components/PageNotFound';
import { routeTree } from './routeTree.gen';
import { useAuth } from 'hooks/auth/useAuth';
import { Loading } from '@/components/Loading';
import { DefaultCatchBoundary } from '@/components/DefaultCatchBoundary';

export function createRouter() {
  return createReactRouter({
    routeTree,
    defaultPreload: 'intent',
    context: {
      auth: useAuth, // This will be set after we wrap the app in an AuthProvider
    },
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: PageNotFound, // 404 component
    defaultPendingComponent: Loading, // Add default loading component here
  });
}

// Create a new router instance
export const router = createRouter();

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

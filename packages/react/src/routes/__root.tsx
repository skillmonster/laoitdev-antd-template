import {
  LayoutKey,
  SelectLayouts,
} from '@/ui/containers/layouts/SelectLayouts';
import { createRootRoute } from '@tanstack/react-router';

export const DefaultLayout: LayoutKey = 'LayoutSideBarIcon'; // Default layout

export const Route = createRootRoute({
  component: () => <SelectLayouts />,
});

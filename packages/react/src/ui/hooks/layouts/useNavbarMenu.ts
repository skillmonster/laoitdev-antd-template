import { useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const useNavbarMenu = () => {
  const { pathname } = useLocation();

  // State to control drawer visibility for mobile
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Show drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Close drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // and close drawer when route change
  useEffect(() => {
    if (pathname) {
      closeDrawer();
    }
  }, [pathname]);


  return {
    // State Variables
    drawerVisible,
    showDrawer,
    closeDrawer,

    // Keep track of current route
    pathname
  };
};

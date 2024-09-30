/* eslint-disable react-refresh/only-export-components */
import {
  disable as disableDarkMode,
  enable as enableDarkMode,
} from 'darkreader';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { localStorageData } from 'services/cache';

// Define the shape of the context value
interface ThemeContextType {
  isDark: boolean;
  handleThemeChange: (checked: boolean) => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  handleThemeChange: () => {},
});

// Create a provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorageData.getTheme();
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 110,
        sepia: 10,
      });
      localStorageData.setTheme('dark');
    } else {
      disableDarkMode();
      localStorageData.setTheme('light');
    }
  }, [isDark]);

  const handleThemeChange = (checked: boolean) => {
    setIsDark(checked);
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

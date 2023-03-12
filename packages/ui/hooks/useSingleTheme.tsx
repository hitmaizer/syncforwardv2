import { useContext, useEffect } from 'react';

import {
  ThemeProvider as OriginalThemeProvider,
  ThemeContext,
} from 'styled-components';

import { getTheme, ThemeType } from '@styles';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeType;
  initialMode?: string | null;
}

export const SingleThemeProvider = ({
  children,
  theme,
  initialMode = 'dark',
}: ThemeProviderProps) => {
  const themeItem = getTheme(initialMode, theme);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-color-scheme',
      initialMode || 'dark'
    );
  }, []);

  return (
    <OriginalThemeProvider theme={themeItem}>
      {children as any}
    </OriginalThemeProvider>
  );
};

export const useSingleTheme = () => useContext(ThemeContext as any);

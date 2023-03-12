'use client';

import { ReactNode } from 'react';

import { BreakpointProvider } from '@ui-hooks/useBreakpoint';
import { SingleThemeProvider } from '@ui-hooks/useSingleTheme';
import dark from '@styles/theme/dark/dark.theme';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <SingleThemeProvider theme={dark}>
      <BreakpointProvider>{children}</BreakpointProvider>
    </SingleThemeProvider>
  );
};

export default AppProvider;

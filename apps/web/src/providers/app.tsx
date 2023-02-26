'use client';

import { ReactNode } from 'react';

import { ApolloProvider } from '@apollo/client';
import client from '@lib/apollo';
import { BreakpointProvider } from '@ui-hooks/useBreakpoint';
import { SingleThemeProvider } from '@ui-hooks/useSingleTheme';
import dark from '@styles/theme/dark/dark.theme';

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <SingleThemeProvider theme={dark}>
        <BreakpointProvider>{children}</BreakpointProvider>
      </SingleThemeProvider>
    </ApolloProvider>
  );
};

export default AppProvider;

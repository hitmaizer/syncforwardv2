import { ThemeProvider } from 'styled-components';

import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import GlobalStyles from '../styles/globalStyles';

import '../styles/reset.css';
import '../styles/fonts';

import { getTheme } from '../styles/theme';

import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextImage from 'next/image';

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <NextImage {...props} unoptimized />,
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      appBg: '#0E1116',
      appContentBg: '#0A0C0F',
      barBg: '#1B202C',
      brandTitle: 'Sync Forward Component Library',
      brandUrl: 'https://sync-forward.com',
      fontBase:
        '"Inter", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontCode: 'Menlo, monospace',
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      appBg: '#F3F4FC',
      appContentBg: '#FBFBFE',
      barBg: '#FFFFFF',
      fontBase:
        '"Inter", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      fontCode: 'Menlo, monospace',
      brandTitle: 'Sync Forward Component Library',
      brandUrl: 'https://sync-forward.com',
    },
    darkClass: 'theme--dark',
    lightClass: 'theme--light',
    classTarget: 'html',
    stylePreview: true,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  grid: {
    gridOn: false,
    columns: 12,
    gap: '40px',
    gutter: '40px',
    maxWidth: '1193px',
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={getTheme('dark')}>
      <GlobalStyles />

      <Story />
    </ThemeProvider>
  ),
];

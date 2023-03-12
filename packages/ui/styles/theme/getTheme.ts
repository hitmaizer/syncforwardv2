import get from 'lodash.get';

import dark from './dark/dark.theme';

const getTheme = (mode: string | null, theme = dark) => {
  const modeName = !mode || mode === 'dark' ? 'dark' : 'light';
  const colors = get(theme.colors, modeName, theme.colors.dark);

  return {
    ...theme,
    colors,
    isLight: modeName === 'light',
  };
};

export default getTheme;

import generate from '../generateVariants';

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  default: '#98AAC0',
  primary: '#00CE6B',
  secondary: '#6654de',
  positive: '#00CE6B',
  negative: '#CC5C5C',
  warning: '#FFAB2D',
  contrast: '#FFFFFF',

  text: ['#FFFFFF', '#94A7C6', '#6f819f'],

  inverse: '#000000',
};

const customColors = {
  white: colors.white,
  black: colors.black,
  background: {
    main: '#111318',
    secondary: '#121926',
    tertiary: '#010814',
    gradient:
      'linear-gradient(180deg, #0A1321 0%, #0A0C0F 54.69%, #0A101A 100%)',
    fadeGradient: '#0E1420e6 0%, #0E142066 50%, #0E142000 100%',
  },

  surface: {
    main: '#1B2332',
    secondary: '#242E42',
    gradient: 'linear-gradient(to bottom, #1B2332 0%, #1B233200 100%);',
  },

  border: '#1F2C47',

  inverse: colors.inverse,

  shadow: {
    normal: `0 1px 1px rgba(0,0,0,0.02),
    0 2px 2px rgba(0,0,0,0.02),
    0 4px 4px rgba(0,0,0,0.02),
    0 6px 8px rgba(0,0,0,0.02),
    0 8px 16px rgba(0,0,0,0.02);`,

    raised: `0 2px 1px rgba(0,0,0,0.05),
    0 4px 2px rgba(0,0,0,0.05),
    0 8px 4px rgba(0,0,0,0.05),
    0 16px 8px rgba(0,0,0,0.05),
    0 32px 16px rgba(0,0,0,0.05);`,

    small: `0 1px 1px rgba(0,0,0,0.02),
    0 2px 2px rgba(0,0,0,0.02),
    0 4px 4px rgba(0,0,0,0.02),
    0 6px 8px rgba(0,0,0,0.02),
    0 8px 16px rgba(0,0,0,0.02);`,
  },

  hero: {
    headingGradient: '',
  },

  companyStats: {
    bg: '',
    shadow: '',
    border: '',
  },
};

export default {
  ...generate(colors),
  ...customColors,
};

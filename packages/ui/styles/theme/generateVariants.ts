import { mix, transparentize } from 'polished';

interface ColorInput {
  white: string;
  black: string;
  default: string;
  primary: string;
  secondary: string;
  positive: string;
  negative: string;
  warning: string;
  contrast: string;
  text: string[];
  inverse: string;
}

const generateVariants = (colors: ColorInput, dark = true) => {
  const mixColor = dark ? colors.white : colors.black;

  const [textGlow, cardGlow] = dark ? [0.7, 0.87] : [0.98, 0.95];
  const dropdownShadow = dark ? 0.67 : 0.2;
  const dropdownBorder = dark ? 0.85 : 0.65;
  const bgTransparency = dark ? 0.84 : 0.92;

  return {
    default: {
      main: colors.default,
      text: mix(0.2, mixColor, colors.default),
      bg: transparentize(bgTransparency, colors.default),
      hover: transparentize(0.2, colors.default),
    },

    primary: {
      main: colors.primary,
      text: mix(0.2, mixColor, colors.primary),
      bg: transparentize(bgTransparency, colors.primary),
      hover: transparentize(0.2, colors.primary),
    },

    secondary: {
      main: colors.secondary,
      text: mix(0.2, mixColor, colors.secondary),
      bg: transparentize(bgTransparency, colors.secondary),
      hover: transparentize(0.2, colors.secondary),
    },

    positive: {
      main: colors.positive,
      text: mix(0.2, mixColor, colors.positive),
      bg: transparentize(bgTransparency, colors.positive),
      hover: transparentize(0.2, colors.positive),
    },

    negative: {
      main: colors.negative,
      text: mix(0.2, mixColor, colors.negative),
      bg: transparentize(bgTransparency, colors.negative),
      hover: transparentize(0.2, colors.negative),
    },

    warning: {
      main: colors.warning,
      text: mix(0.05, mixColor, colors.warning),
      bg: transparentize(bgTransparency, colors.warning),
      hover: transparentize(0.2, colors.warning),
    },

    contrast: {
      main: colors.contrast,
      text: colors.contrast,
      bg: transparentize(bgTransparency, colors.contrast),
      hover: transparentize(0.2, colors.contrast),
    },

    text: {
      primary: colors.text[0],
      secondary: colors.text[1],
      muted: colors.text[2],
      transparent: transparentize(0.5, colors.text[0]),
    },

    input: {
      focus: {
        boxShadow: `0px 0px 0px 3px ${transparentize(0.6, colors.primary)}`,
        border: `1px solid ${transparentize(0.5, colors.primary)}`,
      },
    },

    glow: {
      text: {
        primary: `0px 0px 12px ${transparentize(textGlow, colors.primary)}`,
        contrast: `0px 0px 12px ${transparentize(textGlow, colors.contrast)}`,
      },
      card: {
        warning: `0px 4px 50px ${transparentize(cardGlow, colors.warning)}`,
      },
    },

    dropdown: {
      border: `1px solid ${transparentize(dropdownBorder, colors.default)}`,
      shadow: `0px 3px 26px rgba(0, 0, 0, ${dropdownShadow})`,
    },
  };
};

export default generateVariants;

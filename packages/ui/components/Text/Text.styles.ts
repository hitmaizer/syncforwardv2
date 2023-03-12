import styled from 'styled-components';
import {
  color,
  typography,
  space,
  variant,
  style,
  layout,
} from 'styled-system';

import { StyledTextProps } from './Text.types';

const textTransform = style({
  key: 'textTransform',
  cssProperty: 'textTransform',
  prop: 'textTransform',
});

const size = variant({
  prop: 'size',
  variants: {
    xs: {
      fontSize: '12px',
    },
    sm: {
      fontSize: 1,
    },
    md: {
      fontSize: ['15px', 2],
    },
    lg: {
      fontSize: [2, 3],
    },
    xl: {
      fontSize: [3, '21px'],
    },
    'overline-sm': {
      fontSize: '12px',
      textTransform: 'uppercase !important',
      letterSpacing: '0.125em',
    },

    'overline-md': {
      fontSize: '13px',
      textTransform: 'uppercase !important',
      letterSpacing: '0.16em',
    },

    'overline-lg': {
      fontSize: '14px',
      textTransform: 'uppercase !important',
      letterSpacing: '0.16em',
    },
  },
});

export const Text = styled.p<StyledTextProps>`
  line-height: 165%;
  text-shadow: ${({ glow, theme }) =>
    glow ? theme.colors.glow.text.contrast : 'none'};
  white-space: normal;
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.text.primary};
    transition: 150ms ${({ theme }) => theme.transition.easeOutCubic};
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }
  ${size}
  ${color}
  ${typography}
  ${space}
  ${layout}
  ${textTransform}
`;

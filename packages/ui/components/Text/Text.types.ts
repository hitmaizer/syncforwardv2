import {
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { HeadingElement, TextElement } from '@styles';

export interface TextProps extends TypographyProps, SpaceProps, LayoutProps {
  as?: HeadingElement | TextElement | 'div';
  size?: ResponsiveValue<
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'overline-sm'
    | 'overline-md'
    | 'overline-lg'
  >;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  color?: string;
  children: React.ReactNode;
  glow?: boolean;
}

export type StyledTextProps = Pick<TextProps, 'glow'>;

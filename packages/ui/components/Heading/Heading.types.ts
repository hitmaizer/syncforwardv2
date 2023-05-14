import {
  LayoutProps,
  SpaceProps,
  ResponsiveValue,
  ColorProps,
  TextAlignProps,
} from 'styled-system';

import { HeadingElement, TextElement } from '@styles';

export interface HeadingProps
  extends LayoutProps,
    SpaceProps,
    ColorProps,
    TextAlignProps {
  as?: TextElement | HeadingElement;
  size?: ResponsiveValue<'h1' | 'h2' | 'h3' | 'h4' | 'h5'>;
  color?: string;
  children: React.ReactNode;
}

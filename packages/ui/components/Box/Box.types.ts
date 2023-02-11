import { ReactNode } from 'react';

import {
  LayoutProps,
  PositionProps,
  FlexboxProps,
  SpaceProps,
  BackgroundColorProps,
  BorderProps,
} from 'styled-system';

export interface BoxProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    PositionProps,
    BackgroundColorProps,
    BorderProps {
  children?: ReactNode;
  color?: string;
}

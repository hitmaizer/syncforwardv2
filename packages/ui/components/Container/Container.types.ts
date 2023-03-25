import { ReactNode } from 'react';

import { LayoutProps, PositionProps, SpaceProps } from 'styled-system';

export interface ContainerProps extends LayoutProps, SpaceProps, PositionProps {
  children: ReactNode;
  fluid?: boolean;
  small?: boolean;
  style?: React.CSSProperties;
}

export type StyledContainerProps = Pick<ContainerProps, 'fluid' | 'small'>;

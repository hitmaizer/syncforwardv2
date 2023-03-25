import { SpaceProps } from 'styled-system';

interface BaseProps {
  color?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export type IconProps = BaseProps & SpaceProps;

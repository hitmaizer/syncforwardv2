import styled, { css } from 'styled-components';
import { layout, position, space } from 'styled-system';

import { StyledContainerProps } from './Container.types';

export const Container = styled.div<
  Pick<StyledContainerProps, 'fluid' | 'small'>
>`
  ${layout}
  ${space}
  ${position}
  ${(props) =>
    props.small &&
    css`
      & {
        max-width: 960px;
      }
    `}
  ${(props) =>
    props.fluid &&
    css`
      & {
        max-width: ${props.theme.sizes.container.xxl}px;
        width: 100%;
      }
    `}
`;

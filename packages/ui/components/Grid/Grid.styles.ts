import styled from 'styled-components';
import { grid, layout, flexbox, space } from 'styled-system';

import { StyledGridProps } from './Grid.types';

export const Grid = styled.div<StyledGridProps>`
  ${layout}
  ${grid}
  ${flexbox}
  ${space}
  width: 100%;
`;

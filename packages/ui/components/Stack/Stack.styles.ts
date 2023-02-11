import styled, { css } from 'styled-components';
import { gridGap, width } from 'styled-system';

import { StackProps } from './Stack.types';
import Box from '../Box';

export const Stack = styled(Box)<StackProps>`
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${gridGap};
  ${width};
`;

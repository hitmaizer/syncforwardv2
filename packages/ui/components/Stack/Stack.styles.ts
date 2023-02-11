import styled, { css } from 'styled-components';
import { gridGap, width } from 'styled-system';

import Box from '../Box';
import { StackProps } from './Stack.types';

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

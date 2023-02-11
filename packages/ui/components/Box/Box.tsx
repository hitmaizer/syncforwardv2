import { forwardRef, ForwardRefRenderFunction } from 'react';

import styled from 'styled-components';
import { layout, flexbox, space, color, position, border } from 'styled-system';

import { BoxProps } from './Box.types';

const StyledBox = styled.div`
  ${layout}
  ${space}
  ${flexbox}
  ${color}
  ${position}
  ${border}
`;

const BoxElement: ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => {
  const { children, ...rest } = props;

  return (
    <StyledBox ref={ref} {...rest}>
      {children}
    </StyledBox>
  );
};

const Box = forwardRef(BoxElement);

export default Box;

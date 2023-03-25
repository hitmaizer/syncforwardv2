import { forwardRef, ForwardRefRenderFunction } from 'react';

import * as S from './Container.styles';
import { ContainerProps } from './Container.types';

const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> = (
  props,
  ref
) => {
  const { children } = props;

  return (
    <S.Container
      ref={ref}
      maxWidth="container.lg"
      width="100%"
      mx="auto"
      px={[6, 11]}
      {...props}
    >
      {children}
    </S.Container>
  );
};

const ForwardedContainer = forwardRef(Container);

export default ForwardedContainer;

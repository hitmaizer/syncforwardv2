import Button from '@ui-components/Button/Button';
import Heading from '@ui-components/Heading/Heading';
import Image from '@ui-components/Image/Image';
import Stack from '@ui-components/Stack/Stack';
import Text from '@ui-components/Text/Text';
import NextLink from 'next/link';
import styled from 'styled-components';

export const Hero = styled(Stack).attrs({
  vertical: true,
})``;

export const BackgroundImage = styled(Image).attrs({
  layout: 'fill',
})`
  z-index: -1;
`;

export const Content = styled(Stack).attrs({
  vertical: true,
})``;

export const IntroText = styled(Text).attrs({
  m: 0,
})``;

export const Title = styled(Heading).attrs({
  mt: 8,
  mb: 0,
})`
  font-size: ${({ theme }) => theme.fontSizes[12]}px;
`;

export const Subtitle = styled(Text).attrs({
  mt: 10,
  mb: 0,
})``;

export const Link = styled(NextLink).attrs({ passHref: true })``;

export const Cta = styled(Button).attrs({})``;

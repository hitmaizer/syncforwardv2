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
})``;

export const Content = styled(Stack).attrs({
  vertical: true,
})``;

export const IntroText = styled(Text).attrs({})``;

export const Title = styled(Heading).attrs({})``;

export const Subtitle = styled(Text).attrs({})``;

export const Link = styled(NextLink).attrs({ passHref: true })``;

export const Cta = styled(Button).attrs({})``;

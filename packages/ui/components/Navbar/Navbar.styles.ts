import Stack from '@ui-components/Stack';
import Text from '@ui-components/Text';
import NextLink from 'next/link';
import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
`;

export const Content = styled(Stack).attrs({
  width: '100%',
  justifyContent: 'space-between',
  px: 19,
  py: 17,
})``;

export const LinksSection = styled(Stack).attrs({
  gridGap: 13,
})``;

export const Link = styled(NextLink).attrs({ passHref: true })``;

export const LinkText = styled(Text).attrs({
  color: '#878787',
  textTransform: 'uppercase',
  fontWeight: 'bold',
})`
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

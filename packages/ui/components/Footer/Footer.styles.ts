import Box from '@ui-components/Box';
import UIIcon from '@ui-components/Icon';
import Stack from '@ui-components/Stack';
import NextLink from 'next/link';
import styled from 'styled-components';

export const Container = styled.footer.attrs({
  width: '100%',
})``;

export const ItemsWrapper = styled(Stack).attrs({
  gridGap: 8,
  justifyContent: 'center',
})``;

export const FooterItem = styled(Box).attrs({})``;

export const Link = styled(NextLink).attrs({
  passHref: true,
  target: '_blank',
  rel: 'noopener noreferrer nofollow',
})``;

export const Icon = styled(UIIcon).attrs({
  size: 'lg',
  color: '#878787',
})`
  transition: color 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

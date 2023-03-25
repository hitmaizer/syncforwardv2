import { createElement } from 'react';

import Container from '@ui-components/Container';
import Grid from '@ui-components/Grid';
import Stack from '@ui-components/Stack';
import styled from 'styled-components';

import {
  SfApple,
  SfBandcamp,
  SfBeatport,
  SfSoundcloud,
  SfSpotify,
  SfYoutube,
} from '../../icons';

const argTypes = {
  color: {
    description: 'Icon color',
    table: {
      type: {
        summary: 'string',
        detail: 'Valid styled-system color key or HEX value',
      },
      defaultValue: {
        summary: 'primary.text',
      },
    },
    control: {
      disable: true,
    },
  },
  size: {
    description: 'Icon size',
    table: {
      type: {
        summary: 'xs | sm | md | lg',
        detail: '16px - 20px - 24px - 32px',
      },
      defaultValue: {
        summary: 'md',
      },
    },
  },
};

export default {
  title: 'Library/Icons/Icon',
  argTypes,
};

const IconItem = styled(Stack).attrs({
  vertical: true,
  gridGap: 5,
  p: 8,
})`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii[2]}px;
  > p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 12px;
    text-align: center;
  }
`;

const icons = [
  SfApple,
  SfBandcamp,
  SfBeatport,
  SfSoundcloud,
  SfSpotify,
  SfYoutube,
];

export const BaseIcons = () => {
  return (
    <Container>
      <Grid
        gridGap={5}
        gridTemplateColumns="repeat(auto-fit, minmax(140px, 1fr))"
      >
        {icons.map((icon) => (
          <IconItem px={1} py={6}>
            {createElement(icon, { size: 'md', color: 'white' })}
            <p>{icon.displayName}</p>
          </IconItem>
        ))}
      </Grid>
    </Container>
  );
};

BaseIcons.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QDhAr4HYPtyKRQxRzC3De8/Polkastarter-UI-Library?node-id=29%3A2554',
  },
};

import { ComponentMeta } from '@storybook/react';
import Stack from '@ui-components/Stack';
import { withDesign } from 'storybook-addon-designs';

import Text from './Text';

export default {
  title: 'Library/Typography/Text',
  component: Text,
  decorators: [withDesign],
} as ComponentMeta<typeof Text>;

const textString =
  'Such a riot of sea and wind strews the whole extent of beach with whatever has been lost or thrown overboard, or torn out of sunken ships. Many a man has made a good week’s work in a single day by what he has found while walking along the Beach when the surf was down.';

const sizes = ['xs', 'sm', 'md', 'lg'] as const;
const weights = ['regular', 'medium', 'semibold', 'bold'];

export const Default = () => {
  return (
    <Stack vertical gridGap={8}>
      {sizes.map((size) => (
        <Stack gridGap={10}>
          <Text
            minWidth="20"
            size="sm"
            fontWeight="semibold"
            textTransform="uppercase"
          >{`text / ${size}`}</Text>
          {weights.map((weight) => (
            <Text minWidth="300px" size={size} fontWeight={weight}>
              {textString}
            </Text>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QDhAr4HYPtyKRQxRzC3De8/Polkastarter-UI-Library?node-id=76%3A6323',
  },
};

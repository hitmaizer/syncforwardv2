import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from '.';
import { HeadingProps } from './Heading.types';

export default {
  title: 'Library/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args: HeadingProps) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  size: 'h1',
  children: 'Default heading',
};

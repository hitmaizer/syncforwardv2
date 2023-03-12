import { ComponentStory, ComponentMeta } from '@storybook/react';

import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  args: {
    navLinks: [
      {
        href: '/',
        label: 'Home',
      },
      {
        href: '/releases',
        label: 'Releases',
      },
      {
        href: '/podcasts',
        label: 'Podcasts',
      },
      {
        href: '/artists',
        label: 'Artists',
      },
      {
        href: '/store',
        label: 'Store',
      },
    ],
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

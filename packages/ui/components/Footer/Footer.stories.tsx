import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    footerItems: [
      {
        iconName: 'SfApple',
        href: 'https://www.google.com',
      },
      {
        iconName: 'SfBeatport',
        href: 'https://www.google.com',
      },
      {
        iconName: 'SfSoundcloud',
        href: 'https://www.google.com',
      },
      {
        iconName: 'SfSpotify',
        href: 'https://www.google.com',
      },
      {
        iconName: 'SfYoutube',
        href: 'https://www.google.com',
      },
      {
        iconName: 'SfBandcamp',
        href: 'https://www.google.com',
      },
    ],
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};

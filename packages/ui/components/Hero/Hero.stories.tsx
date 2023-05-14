import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hero from './Hero';

export default {
  title: 'Library/Hero',
  component: Hero,
  args: {
    title: 'Title',
    introText: 'Intro text',
    subtitle: 'Subtitle',
    bgImage: {
      src: '/assets/placeholder-bg.png',
      alt: 'Alt text',
      blurDataURL:
        'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAgDBgf/xAAkEAACAgEEAQQDAAAAAAAAAAABAgMEEQAFBiESEyIxgUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIRL/2gAMAwEAAhEDEQA/ALTsfEeQJx/d1v2Tbvt0iSTl4vId+39A9d/0aLfA91rbY8MFiKSWzIIfOLziaMM2fLOSeuvjWyU0Qw5KLkk561I0SMQCoxj41SzA43YKbY4jzOxIX2lblisC0fqNY7LoxRvrKn60aaFaVapmOrAkEZJcrGPEZJyTgfknRpC+2f/Z',
    },
    cta: {
      label: 'CTA',
      href: '#',
    },
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};

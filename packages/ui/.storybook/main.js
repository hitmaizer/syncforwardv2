const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },

  features: {
    postcss: false,
  },

  webpackFinal: (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    );

    return config;
  },

  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    'storybook-addon-designs',
    'storybook-dark-mode',
    'storybook-addon-next-router',
    '@storybook/addon-jest',
    require.resolve('storybook-addon-grid/preset'),
    '@washingtonpost/storybook-addon-web-vitals',
    'storybook-addon-pseudo-states',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },

    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          prettierConfig: { singleQuote: true, tabWidth: 2, semi: true },
        },
      },
    },
  ],
  staticDirs: ['../public'],
};

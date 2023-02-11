/* eslint-disable global-require */
module.exports = {
  ...require('syncforward/eslintconfig/eslint-react'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [
    '.turbo',
    'icons/*.tsx',
    'icon-index-template.js',
    'icon-template.js',
    'storybook-static',
  ],
};

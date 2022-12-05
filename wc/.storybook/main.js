module.exports = {
  // stories needs to be a flat directory for the storybook-deployer package
  stories: ['../stories/*.stories.@(mdx|js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    'storybook-dark-mode',
  ],
  'framework': '@storybook/web-components',
  "staticDirs": [{ from: '../dist/components/assets', to: 'assets/' }],
};

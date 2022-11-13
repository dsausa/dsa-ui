module.exports = {
  "stories": [
    "../stories/*.stories.@(mdx|js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode"
  ],
  "framework": "@storybook/web-components",
  "staticDirs": [{ from: '../dist/components/assets', to: 'assets/' }]
}
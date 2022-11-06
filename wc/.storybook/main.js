module.exports = {
  "stories": [
    "../stories/*.stories.@(mdx|js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/web-components",
  "staticDirs": [{ from: '../assets', to: 'assets/' }]
}
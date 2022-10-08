import { defineCustomElements } from '../dist/esm/loader';
import { setCustomElementsManifest } from '@storybook/web-components';
import manifest from '../custom-elements.json';
import './global.css';
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

defineCustomElements();
setCustomElementsManifest(manifest)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
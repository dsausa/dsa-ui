import { defineCustomElements } from '../dist/esm/loader';
import { setCustomElementsManifest } from '@storybook/web-components';
import manifest from '../custom-elements.json';

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
import { defineCustomElements } from '../dist/esm/loader';
import { setCustomElementsManifestWithOptions } from './cemOpts';
import manifest from '../custom-elements.json';

defineCustomElements();
setCustomElementsManifestWithOptions(manifest, { privateFields: false });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
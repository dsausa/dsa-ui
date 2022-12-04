import { setCustomElementsManifestWithOptions } from './cemOpts';
import manifest from '../custom-elements.json';

import '../src/dsa-ui.css';

// We are using the dist-custom-elements output target, so
// we need to import any components we use separately.
// Yes, it is "unused". Yes, it is necessary.
import { defineCustomElements } from '../loader';

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
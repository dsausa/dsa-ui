import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'dsa-ui',
  globalStyle: 'src/dsa-ui.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@dsa-ui/wc',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      copy: [
        {
          src: 'assets',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
    },
  ],
};

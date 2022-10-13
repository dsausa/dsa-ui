import { Config } from '@stencil/core';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'dsa-ui',
  plugins: [
    tailwind(),
    tailwindHMR(),
  ],
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
    },
  ],
};

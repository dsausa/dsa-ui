import { Config } from '@stencil/core';
import tailwind, { PluginOpts, tailwindHMR } from 'stencil-tailwind-plugin';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwindConf from './tailwind.config';

export const config: Config = {
  namespace: 'dsa-ui',
  plugins: [
    tailwind({
      ...PluginOpts.DEFAULT,
      tailwindConf,
    }),
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

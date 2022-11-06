import { Config } from '@stencil/core';
import tailwind, { PluginOpts, tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindConf from './tailwind.config';
import { reactOutputTarget } from '@stencil/react-output-target';
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import replace from "postcss-replace";

export const config: Config = {
  namespace: 'dsa-ui',
  plugins: [
    tailwind({
      ...PluginOpts.DEFAULT,
      tailwindConf,
      postcss: {
        plugins: [
          tailwindcss(),
          replace({ pattern: /html/g, commentsOnly: false, data: { replaceAll: ':host' } }),
          replace({ pattern: /body/gi, commentsOnly: false, data: { replaceAll: ':host' } }),
          replace({ pattern: /:root/gi, commentsOnly: false,  data: { replaceAll: ':host' } }),
          autoprefixer(),
        ]
      }
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

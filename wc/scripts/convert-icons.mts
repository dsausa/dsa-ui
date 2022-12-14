import { type Config, transform } from '@svgr/core';
import * as path from 'path';
import { promises as fsp } from 'fs';
import { svgDashAttrs } from './svg-dash-attrs.mjs';

const __dirname = path.dirname(import.meta.url.replace(/^file:\/\//, ''));

const WC = path.join(__dirname, '..');

const svgrConfig: Config = {
  expandProps: false,
  jsxRuntime: 'automatic',
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@babel/plugin-proposal-decorators',
          {
            version: '2022-03',
          },
        ],
      ],
    },
  },
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  replaceAttrValues: {
    'black': '{this.color}',
    '#000': '{this.color}',
    '#0000': '{this.color}',
    '#000000': '{this.color}',
    '#00000000': '{this.color}',
  },

  typescript: true,
};

/** Source directory for .svg files. */
const SRC = path.join(WC, 'src', 'assets', 'svg');

/** Destination directory for Stencil components. */
const DEST = path.join(WC, 'src', 'components', 'icons-auto');

// ----------------------------------------------------------------------------

const files = await fsp.readdir(SRC);
await Promise.all(
  files.map(async filename => {
    // read svg file
    const svgCode = await fsp.readFile(path.join(SRC, filename), 'utf-8');

    // different contexts for the name
    const base = filename.replace(/\.svg$/, '');
    const tagName = `dsa-${base}-icon`;
    const componentName = base.split('-').map(capitalize).join('') + 'Icon';

    // transform source
    const jsCode = await transform(
      svgCode,
      {
        ...svgrConfig,
        template: (variables, { tpl }) =>
          tpl`
export class ${variables.componentName} {
  /**
   * Icon color (currentColor by default)
   */
  //-@Prop() color = 'currentColor';
//-
  render() {
    return (
      ${variables.jsx}
    );
  }
};
`,
      },
      { componentName },
    );

    // @todo figure out how to do this properly / file an issue with SVGR
    let replacedCode = jsCode.replace(/\/\/-/g, '');
    for (const attr of svgDashAttrs) {
      replacedCode = replacedCode.replace(
        new RegExp(`${dashToCamel(attr)}(?==)`, 'g'),
        attr,
      );
    }
    const finalCode = `import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: '${tagName}',
  styleUrl: 'icon-styles.css',
  shadow: true,
})
${replacedCode}`;

    // save new file
    await fsp.writeFile(path.join(DEST, `${tagName}.tsx`), finalCode);
  }),
);

// run prettier

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function dashToCamel(str: string): string {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase());
}

import globalStyles from '../global/dsa-ui.css';

/*** Shortcut to readable class lists; not dynamic */
export const formatClasses = (...args: string[]) => args.join(' ');

/***
 * Workaround for long-lived bug in Chrome that prevents font load from within
 * shadow dom https://bugs.chromium.org/p/chromium/issues/detail?id=336876
 * https://github.com/ionic-team/stencil/issues/2072
 * Doubles as way to add global styles to dom
 */
export const maybeLoadGlobal = () => {
  const id = 'dsa-ui-styles-loader';

  // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
  const element = document.querySelector(`style[id="${id}"]`);

  // Only inject the element if it's not yet present
  if (!element) {
    // css file minified
    const css = removeWhitespace(removeComments(globalStyles));
    console.log(globalStyles);
    console.log(css);
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    style.id = id;
    head.appendChild(style);
  }
};

// EVERYTHING BELOW HERE IS A MEMORIAL TO THE VERY COOL CODE I WROTE THAT
// DOESN'T WORK IN THE BROWSER. However, it is useful for generating valid
// font-face declarations from a directory of font dilwa, so keeping it around
// until it can be ported to a script for future use.

// import fs from "fs"; import * as R from "ramda";

/***
 * Group font names by weight and style
 * @param files - Array of font file names. Expects file names to be in the
 * format: `klima-latin-<weight>-<style>.<ext>`
 * @returns Object with keys for each weight and style combination
 */
// export const groupByWeightAndStyle = R.groupBy( (file: string) => { return
//     R.pipe( R.split('.'), R.dropLast(1), R.head, R.split('-'), R.drop(2),
//     R.join('-') )(file)
//       }
//     );

/***
 * Generate font-face CSS for each font file in directory
 * @param fontPath - Directory to search for font files
 * @returns CSS string
 */
// export function generateCssFromDir(fontPath: string) { let css = "";

//   fs.readdir(fontPath, {}, (err, files) => { if (err) { console.error("Error
//     loading fonts") } else { const fontMap = groupByWeightAndStyle(files as
//     string[]); for (const font in fontMap) { let fontFace =
//     `@font-face{font-family:'klima';`; const [weight, style] =
//     font.split('-'); const filenames = fontMap[font]; const srcArr =
//     filenames.map((filename) => { const ext = filename.split('.').pop();
//     return `url('${fontPath}/${filename}')format('${extFmtMap[ext]}')`
//         });
//         fontFace += `src:` + srcArr.join(`,`) + `;`
//           + `font-weight:${weight};`
//           + `font-style:${style};`
//           + `}`;
//         css += fontFace;
//       }
//     }
//   })

//   return css;
// }

/*** Just in case we add more font formats! */
// const extFmtMap = { woff: 'woff', woff2: 'woff2', ttf: 'truetype', otf:
//   'opentype', eot: 'embedded-opentype'};

const removeComments = (str: string) =>
  str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
const removeWhitespace = (str: string) => str.replace(/[\n\r\s]+/g, '');

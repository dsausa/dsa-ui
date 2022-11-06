/* eslint-disable @typescript-eslint/no-var-requires */

/*** Shortcut to readable class lists; not dynamic */
export const formatClasses = (...args: string[]) => args.join(' ');

/***
 * Workaround for long-lived bug in Chrome that prevents font load from within shadow dom
 * https://bugs.chromium.org/p/chromium/issues/detail?id=336876
 * https://github.com/ionic-team/stencil/issues/2072
 */
export const maybeLoadFont = () => {
  const fontPath = './assets/fonts/styrene/StyreneB-Regular.otf';

  // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
  const element = document.querySelector(`style[id="${fontPath}"]`);

  // Only inject the element if it's not yet present
  if (!element) {
    const css = `@font-face {
                font-family: 'styrene';
                src: url(${fontPath});`,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    style.id = fontPath;
    head.appendChild(style);
  }
};

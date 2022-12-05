import globalStyles from '../dsa-ui.css';

/*** Shortcut to readable class lists; not dynamic */
export const formatClasses = (...args: string[]) => args.join(' ');

/***
 * Appends style tag to dom with all global styles if not already present
 */
export const maybeLoadGlobal = () => {
  const id = 'dsa-ui-styles-loader';

  // Add custom font to page DOM since font-face doesn't work within Shadow DOM.
  const element = document.querySelector(`style[id="${id}"]`);

  // Only inject the element if it's not yet present
  if (!element) {
    // css file minified
    const css = removeWhitespace(removeComments(globalStyles));
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    style.id = id;
    head.appendChild(style);
  }
};

const removeComments = (str: string) =>
  str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
const removeWhitespace = (str: string) => str.replace(/[\n\r\s]+/g, '');

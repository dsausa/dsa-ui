/* eslint-disable @typescript-eslint/no-var-requires */

/***
 *  Turn args/props object into string for use in html literal.
 *  This only works for primitives as implemented.
 */
export const formatArgs = (args: { [x: string]: any }) =>
  Object.keys(args)
    .map(key => `${key}="${args[key]}"`)
    .join(' ');

/*** Shortcut to readable class lists; not dynamic */
export const formatClasses = (...args: string[]) => args.join(' ');

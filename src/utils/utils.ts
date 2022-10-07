/* eslint-disable @typescript-eslint/no-var-requires */

/***
 *  Turn args/props object into string for use in html literal.
 *  This only works for primitives at the moment.
 */
export const formatArgs = (args: { [x: string]: any }) =>
  Object.keys(args)
    .map(key => `${key}="${args[key]}"`)
    .join(' ');

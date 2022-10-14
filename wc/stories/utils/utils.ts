/***
 *  Turn args/props object into string for use in html literal.
 *  This only works for primitives as implemented.
 */
 export const formatArgs = (args: { [x: string]: any }) =>
 Object.keys(args)
   .map(key => `${key}="${args[key]}"`)
   .join(' ');
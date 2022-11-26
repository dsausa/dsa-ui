/***
 *  Turn args/props object into string for use in html literal.
 *  This only works for primitives as implemented.
 */
export const formatArgs = (args: { [x: string]: any }) =>
  Object.keys(args)
    .map(key => {
      const val = args[key];
      if (typeof val === 'boolean') {
        return val ? key : null;
      }
      if (typeof val === 'function') {
        return null;
      }
      return `${key}="${val}"`;
    })
    .filter(Boolean)
    .join(' ');

/**
 * Pick only certain keys from an object.
 * @param obj Object to select from.
 * @param keys Keys to select.
 * @returns New object containing the specified keys.
 */
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return Object.fromEntries(
    keys.map(key => [key, obj[key]] as [K, T[K]]),
  ) as Pick<T, K>;
}

/**
 * Omit certain keys from an object.
 * @param obj Object to select from.
 * @param keys Keys to omit.
 * @returns New object omitting the specified keys.
 */
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const o = Object.fromEntries(
    (Object.keys(obj) as (keyof T)[])
      .filter(key => !(keys as (keyof T)[]).includes(key))
      .map(key => [key, obj[key]]),
  ) as Omit<T, K>;
  return o;
}

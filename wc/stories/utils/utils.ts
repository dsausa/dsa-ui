/***
 *  Turn args/props object into string for use in html literal.
 *  This only works for primitives as implemented.
 */
export const formatArgs = (args: { [x: string]: any }) =>
  Object.keys(args)
    .map(key => {
      const val = args[key];
      switch (typeof val) {
        case 'bigint':
        case 'boolean':
        case 'function':
        case 'number':
        case 'string':
          return `${key}="${escapeHtml(String(val))}"`;
        default:
          return undefined;
      }
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

/**
 * Escape a string for use in HTML.
 * @param unsafe String to escape.
 * @returns String with special characters replaced by entities.
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const formatArgs = (args) =>  Object.keys(args)
.map((key) => `${key}="${args[key]}"`)
.join(' ');

export function capitalizeFirstLetter([ first='', ...rest ]: string[] | string, locale: string): string {
  return [ first.toLocaleUpperCase(locale), ...rest ].join('');
}
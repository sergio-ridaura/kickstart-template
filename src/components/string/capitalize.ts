/**
 * Capitalizes the first character of a string.
 */
export const capitalizeFirstString = (str: string): string => {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

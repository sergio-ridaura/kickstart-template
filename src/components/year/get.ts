/**
 * Retrieves the year from a given date.
 * If no date is provided, it defaults to the current date.
 */
export const getYear = (date?: Date): number => {
  if (date) {
    return date.getFullYear();
  }
  return new Date().getFullYear();
};

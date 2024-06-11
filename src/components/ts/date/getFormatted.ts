/**
 * Formats a given date into a string according to the specified locale and options.
 * If no date is provided, it defaults to the current date.
 */
const getFormattedDate = (
  date?: Date,
  locale: string = "en",
  options?: Intl.DateTimeFormatOptions
): string => {
  const currentDate = date || new Date();
  return currentDate.toLocaleDateString(locale, options);
};

export default getFormattedDate;

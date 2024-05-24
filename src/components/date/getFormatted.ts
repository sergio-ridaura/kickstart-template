export default function getFormattedDate(
  date?: Date,
  locale: string = "en-US",
  options?: Intl.DateTimeFormatOptions
): string {
  const currentDate = date || new Date();
  return currentDate.toLocaleDateString(locale, options);
}

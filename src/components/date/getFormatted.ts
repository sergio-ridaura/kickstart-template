export default function getFormattedDate(
  date?: Date,
  locale: string = "en",
  options?: Intl.DateTimeFormatOptions
): string {
  const currentDate = date || new Date();
  return currentDate.toLocaleDateString(locale, options);
}

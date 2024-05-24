export default function getYear(date?: Date): number {
  if (date) {
    return date.getFullYear();
  }
  return new Date().getFullYear();
}

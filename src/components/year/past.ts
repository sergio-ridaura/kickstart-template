import { getYear } from "./get";

/**
 * Calculates the number of past years between two years.
 */
export const pastYears = (
  last: number,
  current: number = getYear()
): number => {
  return Math.abs(last - current);
};

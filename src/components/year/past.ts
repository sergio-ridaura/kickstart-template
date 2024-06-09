import getYear from "@cmp/year/get";

/**
 * Calculates the number of past years between two years.
 */
const pastYears = (last: number, current: number = getYear()): number => {
  return Math.abs(last - current);
};

export default pastYears;

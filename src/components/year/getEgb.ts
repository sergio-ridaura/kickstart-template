import { getYear } from "./get";

/**
 * Calculates the year a person started grade EGB (Educación General Básica) based on birth year and grade.
 */
export const getEgbYear = (
  birthYear: number,
  grade: number = 1,
  current: number = getYear()
): number => {
  return birthYear + grade + current;
};

import { getEgbAge, type GetEgbAgeType } from "@cmp/age";

/**
 * Calculates the year a person started grade EGB (Educación General Básica) based on birth year and grade.
 */
export const getEgbYear = (
  birthYear: number,
  grade: number | undefined = 1
): number => {
  const validGrade: GetEgbAgeType =
    grade >= 1 && grade <= 8 ? (grade as GetEgbAgeType) : 1;
  const startAge = getEgbAge(validGrade);

  return birthYear + startAge;
};

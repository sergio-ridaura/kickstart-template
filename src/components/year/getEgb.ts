import { getEgbAge, type GetEgbAgeType } from "@cmp/age/getEgb";

/**
 * Calculates the year a person started grade EGB (Educación General Básica) based on birth year and grade.
 */
const getEgbYear = (
  birthYear: number,
  grade: number | undefined = 1
): number => {
  const validGrade: GetEgbAgeType =
    grade >= 1 && grade <= 8 ? (grade as GetEgbAgeType) : 1;
  const startAge = getEgbAge(validGrade);

  return birthYear + startAge;
};

export default getEgbYear;

import { getAgeEgb, type GetAgeEgbType } from "@/src/components/ts/egb/getAge";

/**
 * Calculates the year a person started grade EGB (Educación General Básica) based on birth year and grade.
 */
const getYearEgb = (
  birthYear: number,
  grade: number | undefined = 1
): number => {
  const validGrade: GetAgeEgbType =
    grade >= 1 && grade <= 8 ? (grade as GetAgeEgbType) : 1;
  const startAge = getAgeEgb(validGrade);

  return birthYear + startAge;
};

export default getYearEgb;

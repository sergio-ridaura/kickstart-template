import {
  getAgeEgbWasm,
  type GetAgeEgbWasmType,
} from "@/components/wasm/egb/getAge";

/**
 * Calculates the year a person started grade EGB (Educación General Básica) based on birth year and grade.
 */
const getYearEgbWasm = (birthYear: i32, grade: i32 | undefined = 1): i32 => {
  const validGrade: GetAgeEgbWasmType =
    grade >= 1 && grade <= 8 ? (grade as GetAgeEgbWasmType) : 1;
  const startAge = getAgeEgbWasm(validGrade);

  return birthYear + startAge;
};

export default getYearEgbWasm;

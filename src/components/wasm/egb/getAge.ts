/**
 * Types for getAgeEgbWasm.
 */
type GetAgeEgbWasmType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * Defines a type representing the possible grades for calculating the age in EGB (Educación General Básica).
 * It ranges from 1 to 8, inclusive.
 */
const getAgeEgbWasm: (grade?: GetAgeEgbWasmType) => i32 = (grade = 1) => {
  return grade + 6;
};

export { getAgeEgbWasm, type GetAgeEgbWasmType };

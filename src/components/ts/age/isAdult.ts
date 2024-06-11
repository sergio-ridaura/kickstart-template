/**
 * Checks if a given age is considered an adult year.
 */
const isAdultAge = (age: number, adult: number = 18): boolean => {
  return age >= adult;
};

export default isAdultAge;

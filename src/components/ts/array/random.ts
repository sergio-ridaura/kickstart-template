/**
 * Returns a random element from the provided array.
 */
const randomArray = (list: (string | number)[]): string | number => {
  return list[Math.floor(Math.random() * list.length)];
};

export default randomArray;

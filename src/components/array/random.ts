export default function randomArray(
  list: (string | number)[]
): string | number {
  return list[Math.floor(Math.random() * list.length)];
}

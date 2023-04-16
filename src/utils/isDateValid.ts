export function isValidDate(dirtyDate: Date): boolean {
  const date = new Date(dirtyDate);
  console.log('>>', date);
  return !isNaN(date.getTime());
}

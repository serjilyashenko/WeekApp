export function isValidDate(dirtyDate: Date): boolean {
  const date = new Date(dirtyDate);
  return !isNaN(date.getTime());
}

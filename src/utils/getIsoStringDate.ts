export function getIsoStringDate(dirtyDate: Date): string {
  const year = dirtyDate.getFullYear();
  const month = String(dirtyDate.getMonth() + 1).padStart(2, '0');
  const day = String(dirtyDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

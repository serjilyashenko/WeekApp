export function getWeekRegexPattern(maxWeek: number): string {
  const [_, ones] = String(maxWeek).split('');

  if (!['1', '2', '3', '4', '5', '6'].includes(ones)) {
    console.error('>> invalid maxWeek: ', maxWeek);
  }

  return `^(?:[1-9]|[1-4][0-9]|5[0-${ones}])$`;
}

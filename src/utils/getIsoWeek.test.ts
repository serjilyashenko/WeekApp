import { getIsoWeek } from './getIsoWeek';

it.each([
  ['2023-01-05T15:00:00', 1],
  ['2023-01-10T00:00:00', 2],
  ['2023-01-16T23:59:59.999', 3],
])('day edge cases: %o -> %o', (input: string, output: number) => {
  const weekNumber = getIsoWeek(new Date(input));

  expect(weekNumber).toBe(output);
});

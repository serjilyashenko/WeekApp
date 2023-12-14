import { getIsoWeekNumber } from './getIsoWeekNumber';

it.each([
  ['2022-12-30T15:00:00', 52],
  ['2023-01-01T00:00:00', 52],
  ['2023-01-05T15:00:00', 1],
  ['2023-01-10T00:00:00', 2],
  ['2023-01-16T23:59:59.999', 3],
  ['2023-12-31T23:59:59.999', 52],
  ['2024-01-01T00:00:00.00', 1],
  ['2024-01-02T00:00:00.00', 1],
  ['2024-01-03T00:00:00.00', 1],
  ['2024-01-04T00:00:00.00', 1],
  ['2024-01-05T00:00:00.00', 1],
])('case: %o -> %o', (input: string, output: number) => {
  const weekNumber = getIsoWeekNumber(new Date(input));

  expect(weekNumber).toBe(output);
});

it('edge days of week', () => {
  // start of the first day
  expect(getIsoWeekNumber(new Date('2023-04-06T00:00:00'))).toBe(14);
  // end of the first day
  expect(getIsoWeekNumber(new Date('2023-04-06T23:59:59.999'))).toBe(14);
  // start of the first day
  expect(getIsoWeekNumber(new Date('2023-04-09T00:00:00'))).toBe(14);
  // end of the first day
  expect(getIsoWeekNumber(new Date('2023-04-09T23:59:59.999'))).toBe(14);
});

it('does not mutate the original date', () => {
  const date = new Date('2023-03-29T14:00:00Z');
  getIsoWeekNumber(date);
  expect(date.toISOString()).toBe('2023-03-29T14:00:00.000Z');
});

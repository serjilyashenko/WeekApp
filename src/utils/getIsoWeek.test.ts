import { getIsoWeek } from './getIsoWeek';

it.each([
  ['2023-01-01T00:00:00', '2022-12-26'],
  ['2023-01-04T00:00:00', '2023-01-02'],
  ['2023-01-05T15:00:00', '2023-01-02'],
  ['2023-01-05T00:00:00', '2023-01-02'],
  ['2023-01-05T23:59:59.999', '2023-01-02'],
  ['2024-01-01T23:59:59.999', '2024-01-01'],
  ['2024-01-02T23:59:59.999', '2024-01-01'],
])('day edge cases: %o -> %o', (input, output) => {
  const isoWeekFirstWeek = getIsoWeek(new Date(input));

  expect(isoWeekFirstWeek.toLocaleDateString('en-SE')).toBe(output);
});

it.each([
  ['2023-03-27T14:00:00', '2023-03-27'],
  ['2023-03-28T14:00:00', '2023-03-27'],
  ['2023-03-29T14:00:00', '2023-03-27'],
  ['2023-03-30T14:00:00', '2023-03-27'],
  ['2023-03-31T14:00:00', '2023-03-27'],
  ['2023-04-01T14:00:00', '2023-03-27'],
  ['2023-04-02T14:00:00', '2023-03-27'],
])('weekday cases: %o -> %o', (input, output) => {
  const isoWeekFirstWeek = getIsoWeek(new Date(input));

  expect(isoWeekFirstWeek.toLocaleDateString('en-SE')).toBe(output);
});

it.each([
  ['2023-01-01T15:00:00', '2022-12-26'],
  ['2023-02-08T15:00:00', '2023-02-06'],
  ['2023-03-18T14:00:00', '2023-03-13'],
  ['2023-03-23T14:00:00', '2023-03-20'],
  ['2023-03-29T14:00:00', '2023-03-27'],
])('random tests: %o -> %o', (input, output) => {
  const isoWeekFirstWeek = getIsoWeek(new Date(input));

  expect(isoWeekFirstWeek.toLocaleDateString('en-SE')).toBe(output);
});

it('does not mutate the original date', () => {
  const date = new Date('2023-03-29T14:00:00Z');
  getIsoWeek(date);
  expect(date.toISOString()).toBe('2023-03-29T14:00:00.000Z');
});

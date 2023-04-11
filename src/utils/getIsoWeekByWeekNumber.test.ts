import { getIsoWeekByWeekNumber } from './getIsoWeekByWeekNumber';

it.each([
  [1, '2023-01-02'],
  [2, '2023-01-09'],
  [3, '2023-01-16'],
])('tests case: %o -> %o', (input, output) => {
  const isoWeekFirstWeek = getIsoWeekByWeekNumber(2023, input);

  expect(isoWeekFirstWeek.toLocaleString('en-SE')).toBe(output + ', 00:00:00');
});

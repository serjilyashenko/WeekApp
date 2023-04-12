import { getIsoWeekByWeekNumber } from './getIsoWeekByWeekNumber';

it.each([
  [1, '2023-01-02'],
  [2, '2023-01-09'],
  [3, '2023-01-16'],
  [4, '2023-01-23'],
  [5, '2023-01-30'],
  [6, '2023-02-06'],
  [7, '2023-02-13'],
  [8, '2023-02-20'],
  [9, '2023-02-27'],
  [10, '2023-03-06'],
  [11, '2023-03-13'],
  [12, '2023-03-20'],
  [13, '2023-03-27'],
  [14, '2023-04-03'],
  [15, '2023-04-10'],
  // TODO: add the rest of week numbers
  [52, '2023-12-25'],
])('2023 tests case: %o -> %o', (input, output) => {
  const isoWeekFirstWeek = getIsoWeekByWeekNumber(2023, input);

  expect(isoWeekFirstWeek.toLocaleString('en-SE')).toBe(output + ', 00:00:00');
});

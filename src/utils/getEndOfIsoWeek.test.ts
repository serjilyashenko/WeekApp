import { getEndOfIsoWeek } from './getEndOfIsoWeek';

it.each([
  ['2023-07-22T00:00:00', '2023-07-23, 23:59:59'],
  ['2022-12-26T15:00:00', '2023-01-01, 23:59:59'],
  ['2023-01-03T01:00:00', '2023-01-08, 23:59:59'],
  // TODO: Add more tests
])('test: %o => %o', (input, output) => {
  const date = new Date(input);
  expect(getEndOfIsoWeek(date).toLocaleString('en-SE')).toBe(output);
});

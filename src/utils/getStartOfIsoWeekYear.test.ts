import { getStartOfIsoWeekYear } from './getStartOfIsoWeekYear';

it.each([
  ['2015', '2014-12-29'],
  ['2016', '2016-01-04'],
  ['2017', '2017-01-02'],
  ['2018', '2018-01-01'],
  ['2019', '2018-12-31'],
  ['2020', '2019-12-30'],
  ['2021', '2021-01-04'],
  ['2022', '2022-01-03'],
  ['2023', '2023-01-02'],
  ['2024', '2024-01-01'],
  ['2025', '2024-12-30'],
])('start of %o year is %o', (year, result) => {
  const fifthJanuary = getStartOfIsoWeekYear(
    new Date(`${year}-03-12T14:00:00Z`)
  );

  expect(fifthJanuary.toLocaleDateString('en-SE')).toBe(result);
});

it.each([
  ['2023-01-01T00:00:00', '2022-01-03'],
  ['2022-12-31T00:00:00', '2022-01-03'],
  ['2024-12-31T00:00:00', '2024-12-30'],
])('edge cases: %o => %o', (input, output) => {
  const date = new Date(input);
  expect(getStartOfIsoWeekYear(date).toLocaleDateString('en-SE')).toBe(output);
});

it('does not mutate the original date', () => {
  const date = new Date('2023-03-29T14:00:00Z');
  getStartOfIsoWeekYear(date);
  expect(date.toISOString()).toBe('2023-03-29T14:00:00.000Z');
});

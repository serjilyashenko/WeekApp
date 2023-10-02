import { getWeekRegexPattern } from './getWeekRegexPattern';

const oneTo52Array: Array<string> = Array.from(
  { length: 52 },
  (_, index: number) => String(index + 1)
);

it.each(oneTo52Array)('returns valid for %o', (value: string) => {
  const regexp: RegExp = new RegExp(getWeekRegexPattern(52));
  expect(regexp.test(value)).toBe(true);
});

it.each(['0', '53', '54', '1.5', '52.1', 'a', '5a'])(
  'returns invalid for %o',
  (value: string) => {
    const regexp = new RegExp(getWeekRegexPattern(52));
    expect(regexp.test(value)).toBe(false);
  }
);

it('validates correctly for different maxWeek number', () => {
  const regexp1 = new RegExp(getWeekRegexPattern(52));
  expect(regexp1.test('53')).toBe(false);
  expect(regexp1.test('54')).toBe(false);

  const regexp2 = new RegExp(getWeekRegexPattern(53));
  expect(regexp2.test('53')).toBe(true);
  expect(regexp2.test('54')).toBe(false);

  const regexp3 = new RegExp(getWeekRegexPattern(54));
  expect(regexp3.test('53')).toBe(true);
  expect(regexp3.test('54')).toBe(true);
});

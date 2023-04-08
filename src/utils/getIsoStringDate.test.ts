import { getIsoStringDate } from './getIsoStringDate';

it('should return the ISO string date for the given date object', () => {
  const date = new Date('2022-04-08');
  expect(getIsoStringDate(date)).toEqual('2022-04-08');
});

it('should add leading zeros for single-digit months and days', () => {
  const date = new Date('2022-01-01');
  expect(getIsoStringDate(date)).toEqual('2022-01-01');
});

it('should return the same date string for dates with a time component', () => {
  const date = new Date('2022-04-08T15:30:00');
  expect(getIsoStringDate(date)).toEqual('2022-04-08');
});

it('does not mutate the original date', () => {
  const date = new Date('2023-03-29T14:00:00Z');
  getIsoStringDate(date);
  expect(date.toISOString()).toBe('2023-03-29T14:00:00.000Z');
});

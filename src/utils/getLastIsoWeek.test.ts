import { getIsoStringDate } from './getIsoStringDate';
import { getLastIsoWeek } from './getLastIsoWeek';

it('should return the ISO string date for the correct date for April 18, 2022', () => {
  const date = getLastIsoWeek(new Date('2022-05-18'));

  expect(getIsoStringDate(date)).toEqual('2022-12-26'); // week 52
});

it('should return the ISO string date for the correct date for April 18, 2023', () => {
  const date = getLastIsoWeek(new Date('2023-05-18'));

  expect(getIsoStringDate(date)).toEqual('2023-12-25'); // week 52
});

it('should return the ISO string date for the correct date for April 18, 2024', () => {
  const date = getLastIsoWeek(new Date('2024-05-18'));

  expect(getIsoStringDate(date)).toEqual('2024-12-23'); // week 52
});

it('should return the ISO string date for the correct date for April 18, 2026', () => {
  const date = getLastIsoWeek(new Date('2026-05-18'));

  expect(getIsoStringDate(date)).toEqual('2026-12-28'); // week 53
});

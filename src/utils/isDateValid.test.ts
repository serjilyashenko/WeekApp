import { isValidDate } from './isDateValid';

it('should return true for a valid date', () => {
  expect(isValidDate(new Date('2023-04-16'))).toBe(true);
});

it('should return false for an invalid date', () => {
  expect(isValidDate(new Date('not a valid date'))).toBe(false);
});

it('should return true for a date string that has leading zeros in the month and day', () => {
  expect(isValidDate(new Date('2023-04-03'))).toBe(true);
  expect(isValidDate(new Date('2023-04-30'))).toBe(true);
  expect(isValidDate(new Date('2023-01-01'))).toBe(true);
});

it('should return false for a date string that has invalid month and day values', () => {
  expect(isValidDate(new Date('2023-13-01'))).toBe(false);
  expect(isValidDate(new Date('2023-01-32'))).toBe(false);
});

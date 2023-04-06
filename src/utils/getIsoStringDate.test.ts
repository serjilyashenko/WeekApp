import { getIsoStringDate } from './getIsoStringDate';

it('does not mutate the original date', () => {
  const date = new Date('2023-03-29T14:00:00Z');
  getIsoStringDate(date);
  expect(date.toISOString()).toBe('2023-03-29T14:00:00.000Z');
});

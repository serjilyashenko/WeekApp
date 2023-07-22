import { getIsoWeek } from './getIsoWeek';

export function getEndOfIsoWeek(dirtyDate: Date): Date {
  const date = getIsoWeek(dirtyDate);
  date.setDate(date.getDate() + 7);
  date.setTime(date.getTime() - 1);

  return date;
}

import { getIsoWeek } from './getIsoWeek';

export function getEndOfIsoWeek(dirtyDate: Date): Date {
  const date = getIsoWeek(dirtyDate);
  date.setDate(date.getDate() + 6);
  date.setTime(date.getTime() - 1);

  return date;
}

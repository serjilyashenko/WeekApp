import { getIsoWeek } from './getIsoWeek';
import { getFirstIsoWeek } from './getFirstIsoWeek';

export function getLastIsoWeek(dirtyDate: Date): Date {
  const date: Date = new Date(dirtyDate);
  date.setFullYear(date.getFullYear() + 1);

  const startOfNextIsoWeekYear = getFirstIsoWeek(date);
  startOfNextIsoWeekYear.setDate(startOfNextIsoWeekYear.getDate() - 1);

  return getIsoWeek(startOfNextIsoWeekYear);
}

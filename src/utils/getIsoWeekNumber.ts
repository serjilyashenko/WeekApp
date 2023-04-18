import { MILLISECONDS_IN_WEEK } from '../const';
import { getIsoWeek } from './getIsoWeek';
import { getFirstIsoWeek } from './getFirstIsoWeek';

export function getIsoWeekNumber(dirtyDate: Date): number {
  const firstWeekStart = getFirstIsoWeek(dirtyDate);
  const currentWeekStart = getIsoWeek(dirtyDate);

  const diff = currentWeekStart.getTime() - firstWeekStart.getTime();

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

import { MILLISECONDS_IN_WEEK } from '../const';
import { getStartOfIsoWeek } from './getStartOfIsoWeek';
import { getFirstIsoWeek } from './getFirstIsoWeek';

export function getIsoWeek(dirtyDate: Date): number {
  const firstWeekStart = getFirstIsoWeek(dirtyDate);
  const currentWeekStart = getStartOfIsoWeek(dirtyDate);

  const diff = currentWeekStart.getTime() - firstWeekStart.getTime();

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

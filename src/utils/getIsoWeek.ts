import { startOfIsoWeek } from './startOfIsoWeek';
import { startOfISOWeekYear } from './startOfISOWeekYear';

const millisecondsInWeek = 7 * 24 * 60 * 60 * 1000;

export function getIsoWeek(dirtyDate: Date): number {
  const firstWeekStart = startOfISOWeekYear(dirtyDate);
  const currentWeekStart = startOfIsoWeek(dirtyDate);

  const diff = currentWeekStart.getTime() - firstWeekStart.getTime();

  return Math.round(diff / millisecondsInWeek) + 1;
}

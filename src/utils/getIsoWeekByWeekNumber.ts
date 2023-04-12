import { getStartOfIsoWeekYear } from './getStartOfIsoWeekYear';
import { MILLISECONDS_IN_WEEK } from '../const';

export function getIsoWeekByWeekNumber(year: number, weekNumber: number): Date {
  const date: Date = new Date();
  date.setFullYear(year);
  const startOfIsoWeekYear: Date = getStartOfIsoWeekYear(date);

  const diff: number = MILLISECONDS_IN_WEEK * (weekNumber - 1);
  const resultDate: Date = new Date(startOfIsoWeekYear.getTime() + diff);

  resultDate.setHours(0, 0, 0, 0); // fixes daylight saving time

  return resultDate;
}

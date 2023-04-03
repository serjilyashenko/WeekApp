import { startOfIsoWeek } from './startOfIsoWeek';

// First isoWeek includes 4 January in it
// https://en.wikipedia.org/wiki/ISO_week_date

export function startOfISOWeekYear(dirtyDate: Date): Date {
  const fifthJanuary: Date = new Date(dirtyDate);
  fifthJanuary.setHours(0, 0, 0, 0);
  fifthJanuary.setDate(4);
  fifthJanuary.setMonth(0);

  return startOfIsoWeek(fifthJanuary);
}

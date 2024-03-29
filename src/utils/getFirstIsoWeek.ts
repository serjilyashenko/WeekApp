import { getIsoWeek } from './getIsoWeek';

// First isoWeek includes 4 January in it
// https://en.wikipedia.org/wiki/ISO_week_date

export function getFirstIsoWeek(dirtyDate: Date): Date {
  const date: Date = new Date(dirtyDate);

  const nextFifthJanuary: Date = new Date(dirtyDate);
  nextFifthJanuary.setFullYear(nextFifthJanuary.getFullYear() + 1);
  nextFifthJanuary.setHours(0, 0, 0, 0);
  nextFifthJanuary.setDate(4);
  nextFifthJanuary.setMonth(0);
  const nextYear = getIsoWeek(nextFifthJanuary);

  if (date.getTime() >= nextYear.getTime()) {
    return nextYear;
  }

  const fifthJanuary: Date = new Date(dirtyDate);
  fifthJanuary.setHours(0, 0, 0, 0);
  fifthJanuary.setDate(4);
  fifthJanuary.setMonth(0);
  const thisYear = getIsoWeek(fifthJanuary);

  if (date.getTime() >= thisYear.getTime()) {
    return thisYear;
  }

  const previousFifthJanuary: Date = new Date(dirtyDate);
  previousFifthJanuary.setFullYear(previousFifthJanuary.getFullYear() - 1);
  previousFifthJanuary.setHours(0, 0, 0, 0);
  previousFifthJanuary.setDate(4);
  previousFifthJanuary.setMonth(0);
  return getIsoWeek(previousFifthJanuary);
}

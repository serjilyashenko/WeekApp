const firstDayOfIsoWeek = 1; // Monday is the first day of isoWeek; https://en.wikipedia.org/wiki/ISO_week_date

// 1 mon diff = 0
// 2 tue diff = 1
// 3 wed diff = 2
// 4 thu diff = 3
// 5 fri diff = 4
// 6 sat diff = 5
// 0 sun diff = 6

export function getIsoWeek(dirtyDate: Date): Date {
  const date: Date = new Date(dirtyDate);
  const day: number = date.getDay();

  date.setHours(0, 0, 0, 0);

  const diff: number = day === 0 ? 6 : day - firstDayOfIsoWeek;

  date.setDate(date.getDate() - diff);

  return date;
}

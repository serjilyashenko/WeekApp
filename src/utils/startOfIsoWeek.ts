const firstDayOfIsoWeek = 1; // Monday is the first day of isoWeek; https://en.wikipedia.org/wiki/ISO_week_date

export function startOfIsoWeek(dirtyDate: Date): Date {
  const date: Date = new Date(dirtyDate)
  const day: number = date.getDay();

  date.setHours(0, 0,0, 0);

  const diff: number = day === 0 ? 7  : day - firstDayOfIsoWeek;

  date.setDate(date.getDay() - diff)

  return date;
}

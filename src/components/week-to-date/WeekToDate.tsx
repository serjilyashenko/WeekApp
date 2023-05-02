import { FormEvent, useState } from 'react';
import { CalendarTemplate } from '../../reusable-components/calendar-template/CalendarTemplate';
import { getLastIsoWeek } from '../../utils/getLastIsoWeek';
import { getIsoWeekNumber } from '../../utils/getIsoWeekNumber';
import style from './week-to-date.module.css';

export function WeekToDate(): JSX.Element {
  const [inputWeekNumber, setInputWeekNumer] = useState<number>(
    getIsoWeekNumber(new Date())
  );

  const inputYear: number = 2023; // FIXME: year input should be from another input

  const inputDate: Date = new Date(inputYear, 0, 1);
  const maxWeekNumber = getIsoWeekNumber(getLastIsoWeek(inputDate));

  function onRefresh() {
    setInputWeekNumer(getIsoWeekNumber(new Date()));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <CalendarTemplate
      secondary
      header={
        <form onSubmit={onSubmit}>
          <div>
            <label>
              Year:
              <input
                name="year"
                type="text"
                inputMode="numeric"
                pattern="[1-9][0-9]{3}"
                title="Year YYYY"
                defaultValue={inputYear}
              />
            </label>
          </div>
          <div>
            <label>
              WeekNumber (1 – {maxWeekNumber}):
              <input
                name="week-number"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                defaultValue={inputWeekNumber}
              />
            </label>
          </div>
          <input type="submit" />
        </form>
      }
    >
      <label className={style.wip}>
        Dates:
        <output>lol</output>
      </label>
    </CalendarTemplate>
  );
}

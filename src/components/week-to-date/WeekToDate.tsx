import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CalendarTemplate } from '../../reusable-components/calendar-template/CalendarTemplate';
import { getLastIsoWeek } from '../../utils/getLastIsoWeek';
import { getIsoWeekNumber } from '../../utils/getIsoWeekNumber';
import { getIsoWeekByWeekNumber } from '../../utils/getIsoWeekByWeekNumber';
import { getEndOfIsoWeek } from '../../utils/getEndOfIsoWeek';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as RefreshIcon } from '../../icons/refresh.svg';

import style from './week-to-date.module.css';

export function WeekToDate(): JSX.Element {
  const [inputWeekNumber, setInputWeekNumer] = useState<number>(
    getIsoWeekNumber(new Date())
  );

  const inputYear: number = 2023; // FIXME: year input should be from another input

  const inputDate: Date = new Date(inputYear, 0, 1);
  const maxWeekNumber = getIsoWeekNumber(getLastIsoWeek(inputDate));

  const startDate: Date = getIsoWeekByWeekNumber(inputYear, inputWeekNumber); // TODO: handle error
  const endDate: Date = getEndOfIsoWeek(startDate); // TODO: handle error

  const resultString: string = new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: 'short',
  }).formatRange(startDate, endDate);

  function onRefresh() {
    setInputWeekNumer(getIsoWeekNumber(new Date()));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // @ts-ignore // TODO: get rid of it
    setInputWeekNumer(e.target['week-number'].value);
  }

  function onFormChange(e: ChangeEvent<HTMLFormElement>) {
    console.log('>>', e);

    // setInputWeekNumer(e.target.form['week-number'].value);
  }

  return (
    <CalendarTemplate
      secondary
      header={
        <div className={style.controls_container}>
          <button
            aria-label="refresh date"
            className="icon_btn"
            onClick={onRefresh}
          >
            <div className="circle_attention">
              <RefreshIcon aria-hidden />
            </div>
          </button>
          <time>
            {inputYear} w{inputWeekNumber}
          </time>
          <button className="icon_btn">
            <EditIcon aria-hidden />
          </button>
          <form
            onSubmit={onSubmit}
            onChange={onFormChange}
            style={{ display: 'none' }}
          >
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
        </div>
      }
    >
      <output aria-label="Week days" className={style.dates_output}>
        {resultString}
      </output>
    </CalendarTemplate>
  );
}

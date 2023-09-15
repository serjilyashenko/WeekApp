import React, { useState } from 'react';
import { CalendarTemplate } from '../../reusable-components/calendar-template/CalendarTemplate';
import { getIsoWeekNumber } from '../../utils/getIsoWeekNumber';
import { getIsoWeekByWeekNumber } from '../../utils/getIsoWeekByWeekNumber';
import { getEndOfIsoWeek } from '../../utils/getEndOfIsoWeek';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as RefreshIcon } from '../../icons/refresh.svg';

import style from './week-to-date.module.css';
import { WeekForm } from './week-form/WeekForm';

export function WeekToDate(): JSX.Element {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [week, setWeek] = useState<number>(getIsoWeekNumber(new Date()));
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const startDate: Date = getIsoWeekByWeekNumber(year, week); // TODO: handle error
  const endDate: Date = getEndOfIsoWeek(startDate); // TODO: handle error

  const resultString: string = new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: 'short',
  }).formatRange(startDate, endDate);

  function onRefresh() {
    setYear(new Date().getFullYear());
    setWeek(getIsoWeekNumber(new Date()));
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
            {year} w{week}
          </time>
          <button
            className="icon_btn"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <EditIcon aria-hidden />
          </button>
        </div>
      }
    >
      <div className={style.output_container}>
        <output aria-label="Week days" className={style.dates_output}>
          {resultString}
        </output>
        <div
          className={`${style.week_form} ${
            isEditing ? style.week_form__open : ''
          }`}
        >
          <div className={style.week_form_content}>
            <WeekForm initialYear={year} initialWeek={week} />
          </div>
        </div>
      </div>
    </CalendarTemplate>
  );
}

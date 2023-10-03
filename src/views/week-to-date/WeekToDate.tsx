import React, { useState } from 'react';
import { CalendarTemplate } from '../../components/calendar-template/CalendarTemplate';
import { getIsoWeekNumber } from '../../utils/getIsoWeekNumber';
import { getIsoWeekByWeekNumber } from '../../utils/getIsoWeekByWeekNumber';
import { getEndOfIsoWeek } from '../../utils/getEndOfIsoWeek';
import { WeekForm } from './week-form/WeekForm';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as RefreshIcon } from '../../icons/refresh.svg';

import style from './week-to-date.module.css';

export function WeekToDate(): JSX.Element {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [week, setWeek] = useState<number>(getIsoWeekNumber(new Date()));
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const startDate: Date = getIsoWeekByWeekNumber(year, week); // can throw error. ErrorBoundary catches it
  const endDate: Date = getEndOfIsoWeek(startDate); // can throw error. ErrorBoundary catches it

  const resultString: string = new Intl.DateTimeFormat('default', {
    day: '2-digit',
    month: 'short',
    year: new Date().getFullYear() !== year ? 'numeric' : undefined,
  }).formatRange(startDate, endDate);

  function onRefresh() {
    setYear(new Date().getFullYear());
    setWeek(getIsoWeekNumber(new Date()));
  }

  function onSubmit(year: number, week: number) {
    setYear(year);
    setWeek(week);
    setIsEditing(false);
  }

  return (
    <div
      className={`${style.wrapper} ${
        isEditing ? style.wrapper__is_editing : ''
      }`}
    >
      <CalendarTemplate
        headerClassName={style.header__modificator}
        header={
          <div
            className={style.header_controls_container}
            aria-hidden={isEditing}
          >
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
            <button className="icon_btn" onClick={() => setIsEditing(true)}>
              <EditIcon aria-hidden />
            </button>
          </div>
        }
      >
        <div className={style.output_container}>
          <output aria-label="Week days" className={style.dates_output}>
            {resultString}
          </output>
          <div className={style.week_form} aria-hidden={!isEditing}>
            <div className={style.week_form_content}>
              <WeekForm
                key={`${year}/${week}`}
                initialYear={year}
                initialWeek={week}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </CalendarTemplate>
    </div>
  );
}

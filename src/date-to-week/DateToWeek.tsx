import { useId, useState } from 'react';
import { getIsoStringDate } from '../utils/getIsoStringDate';
import { getIsoWeek } from '../utils/getIsoWeek';

import style from './date-to-week.module.css';

export function DateToWeek(): JSX.Element {
  const weekOutputId = useId();
  const [today, setToday] = useState(new Date());

  const prettyDate = today.toLocaleString('default', {
    day: '2-digit',
    month: 'short',
  });
  const week = getIsoWeek(today);

  function onRefresh() {
    setToday(new Date());
  }

  return (
    <>
      <button onClick={onRefresh}>refresh</button>
      <br />
      <br />
      <div className={style.calendar_container}>
        <div className={style.calendar_header}>
          <time dateTime={getIsoStringDate(today)}>{prettyDate}</time>
        </div>
        <div className={style.week}>
          <label htmlFor={weekOutputId}>week</label>
          <output id={weekOutputId} className={style.week_output}>
            {week}
          </output>
        </div>
      </div>
    </>
  );
}

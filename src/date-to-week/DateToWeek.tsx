import { useId, useState } from 'react';
import { getIsoStringDate } from '../utils/getIsoStringDate';
import { getIsoWeek } from '../utils/getIsoWeek';

import { ReactComponent as RefreshIcon } from '../icons/refresh.svg';

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
    <div className={style.calendar_container}>
      <div className={style.calendar_header}>
        <time dateTime={getIsoStringDate(today)}>{prettyDate}</time>
        <button
          aria-label="refresh date"
          className={style.refresh_button}
          onClick={onRefresh}
        >
          <RefreshIcon aria-hidden />
        </button>
      </div>
      <div className={style.week}>
        <label htmlFor={weekOutputId}>week</label>
        <output id={weekOutputId} className={style.week_output}>
          {week}
        </output>
      </div>
    </div>
  );
}

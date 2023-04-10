import { useId, useState } from 'react';
import { DatePicker } from '../date-picker/DatePicker';
import { getIsoStringDate } from '../../utils/getIsoStringDate';
import { ReactComponent as RefreshIcon } from '../../icons/refresh.svg';
import { getIsoWeek } from '../../utils/getIsoWeek';

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

  function onChange(date: Date) {
    setToday(date);
  }

  return (
    <div className={style.calendar_container}>
      <div className={style.calendar_header}>
        <button
          aria-label="refresh date"
          className={`icon_btn ${style.refresh_button}`}
          onClick={onRefresh}
        >
          <div className={style.circle_attention}>
            <RefreshIcon aria-hidden />
          </div>
        </button>
        <time dateTime={getIsoStringDate(today)}>{prettyDate}</time>
        <DatePicker onChange={onChange} />
      </div>
      <div className={style.week}>
        <label htmlFor={weekOutputId} className={style.week_label}>
          week
        </label>
        <output id={weekOutputId} className={style.week_output}>
          {week}
        </output>
      </div>
    </div>
  );
}

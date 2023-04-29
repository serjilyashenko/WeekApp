import { useId, useState } from 'react';
import { DatePicker } from '../../reusable-components/date-picker/DatePicker';
import { getIsoStringDate } from '../../utils/getIsoStringDate';
import { ReactComponent as RefreshIcon } from '../../icons/refresh.svg';
import { getIsoWeekNumber } from '../../utils/getIsoWeekNumber';

import style from './date-to-week.module.css';

export function DateToWeek(): JSX.Element {
  const weekOutputId = useId();
  const [inputDate, setInputDate] = useState(new Date());

  const prettyDate = inputDate.toLocaleString('default', {
    day: '2-digit',
    month: 'short',
  });
  const week = getIsoWeekNumber(inputDate);

  function onRefresh() {
    setInputDate(new Date());
  }

  function onChange(date: Date) {
    setInputDate(date);
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
        <time dateTime={getIsoStringDate(inputDate)}>{prettyDate}</time>
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

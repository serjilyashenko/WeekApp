import { useId, useState } from 'react';
import { getIsoStringDate } from '../utils/getIsoStringDate';
import { getIsoWeek } from '../utils/getIsoWeek';

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
    <div>
      <time dateTime={getIsoStringDate(today)}>{prettyDate}</time>
      <div>
        <label htmlFor={weekOutputId}>week</label>
        <output id={weekOutputId}>{week}</output>
      </div>
      <button onClick={onRefresh}>refresh</button>
    </div>
  );
}

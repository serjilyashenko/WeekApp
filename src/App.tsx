import { DateToWeek } from './components/date-to-week/DateToWeek';
import { WeekToDate } from './components/week-to-date/WeekToDate';

export default function App(): JSX.Element {
  return (
    <div>
      <h1>🗓️ Week App</h1>
      <div>
        <DateToWeek />
        <br />
        <br />
        <WeekToDate />
      </div>
    </div>
  );
}

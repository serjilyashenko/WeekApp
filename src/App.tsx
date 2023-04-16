import { DateToWeek } from './components/date-to-week/DateToWeek';

export default function App(): JSX.Element {
  return (
    <div>
      <h1>🗓️ Week App</h1>
      <div>
        <DateToWeek />
        <br />
        <br />
        {/*<div>*/}
        {/*  <form>*/}
        {/*    <label>*/}
        {/*      Week:*/}
        {/*      <input*/}
        {/*        type="text"*/}
        {/*        inputMode="numeric"*/}
        {/*        pattern="[0-9]*"*/}
        {/*        defaultValue={1}*/}
        {/*      />*/}
        {/*      <input type="submit" />*/}
        {/*    </label>*/}
        {/*  </form>*/}
        {/*  <label>*/}
        {/*    Dates:*/}
        {/*    <output>lol</output>*/}
        {/*  </label>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

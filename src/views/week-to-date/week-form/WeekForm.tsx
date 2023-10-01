import { ChangeEvent, FormEvent, useState } from 'react';
import { getIsoWeekNumber } from '../../../utils/getIsoWeekNumber';
import { getLastIsoWeek } from '../../../utils/getLastIsoWeek';

import style from './week-form.module.css';

type PropsType = {
  initialYear: number;
  initialWeek: number;
  onSubmit: (year: number, week: number) => void;
};

interface WeekFormElements extends HTMLFormElement {
  year?: HTMLInputElement;
  week?: HTMLInputElement;
}

export function WeekForm(props: PropsType): JSX.Element {
  const { initialYear, initialWeek, onSubmit } = props;

  const [year, setYear] = useState(initialYear);

  const firstDayOfYear: Date = new Date(year, 0, 1);
  const maxWeekNumber = getIsoWeekNumber(getLastIsoWeek(firstDayOfYear));

  function onSubmitInner(e: FormEvent<WeekFormElements>): void {
    e.preventDefault();

    const formEl: WeekFormElements = e.currentTarget;
    const yearEl: HTMLInputElement | undefined = formEl.year;
    const weekEl: HTMLInputElement | undefined = formEl.week;

    console.log('>>', yearEl?.value, weekEl?.value);
    // check values and submit
    // onSubmit();
  }

  function onYearChange(event: ChangeEvent<HTMLInputElement>) {
    const yearEl = event.target;
    const isYearValid = yearEl.checkValidity();

    if (isYearValid) {
      setYear(Number(yearEl.value));
    }
  }

  return (
    <form className={style.week_form} onSubmit={onSubmitInner}>
      <div>
        <label>
          Year:
          <input
            name="year"
            type="text"
            inputMode="numeric"
            pattern="[1-9][0-9]{3}"
            title="Year YYYY"
            required
            defaultValue={initialYear}
            onChange={onYearChange}
          />
        </label>
      </div>
      <div>
        <label>
          Week (1 – {maxWeekNumber}):
          <input
            name="week"
            type="text"
            inputMode="numeric"
            // TODO: validate with maxWeekNumber
            // TODO: check if week validation happens if we change a year
            pattern="[0-9]{1,2}"
            required
            defaultValue={initialWeek}
          />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

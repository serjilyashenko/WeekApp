import React, { FormEvent } from 'react';
import { getIsoWeekNumber } from '../../../utils/getIsoWeekNumber';
import { getLastIsoWeek } from '../../../utils/getLastIsoWeek';

import style from './week-form.module.css';

type PropsType = {
  initialYear: number;
  initialWeek: number;
  onSubmit: () => void;
};

export function WeekForm(props: PropsType): JSX.Element {
  const { initialYear, initialWeek, onSubmit } = props;

  const firstDayOfYear: Date = new Date(initialYear, 0, 1); // TODO: initialYear should be replaced with year from intput here
  const maxWeekNumber = getIsoWeekNumber(getLastIsoWeek(firstDayOfYear));

  function onSubmitInner(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    // setInputWeekNumer(e.target['week-number'].value);
    onSubmit();
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
          />
        </label>
      </div>
      <div>
        <label>
          WeekNumber (1 – {maxWeekNumber}):
          <input
            name="week-number"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*" // TODO: validate with maxWeekNumber
            required
            defaultValue={initialWeek}
          />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

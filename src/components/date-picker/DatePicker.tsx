import { ChangeEvent } from 'react';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import style from './date-picker.module.css';

type PropsType = {
  onChange: (date: Date) => void;
};

export function DatePicker(props: PropsType): JSX.Element {
  const { onChange } = props;

  function onChangeInner(event: ChangeEvent<HTMLInputElement>) {
    const date: Date | null = event.target.valueAsDate;
    if (date) {
      onChange(date);
    }
  }

  return (
    <button className={`icon_btn ${style.datepicker}`}>
      <EditIcon aria-hidden />
      <input
        type="date"
        className={style.datepicker_control}
        onChange={onChangeInner}
      />
    </button>
  );
}

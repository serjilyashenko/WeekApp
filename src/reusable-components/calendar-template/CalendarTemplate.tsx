import style from './calendar-template.module.css';

type PropsType = {
  header: JSX.Element;
  children: JSX.Element;
  secondary?: boolean;
};

export function CalendarTemplate(props: PropsType): JSX.Element {
  const { header, children, secondary } = props;

  const containerClassName = [
    style.calendar_container,
    secondary ? style.calendar_container__secondary : null,
  ]
    .filter((it) => it)
    .join(' ');

  return (
    <div className={containerClassName}>
      <div className={style.calendar_header}>{header}</div>
      <div className={style.calendar_content__wrapper}>
        <div className={style.calendar_content}>{children}</div>
      </div>
    </div>
  );
}

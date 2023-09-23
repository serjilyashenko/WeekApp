import style from './calendar-template.module.css';

type PropsType = {
  header: JSX.Element;
  headerClassName?: string;
  children: JSX.Element;
};

export function CalendarTemplate(props: PropsType): JSX.Element {
  const { header, headerClassName, children } = props;

  return (
    <div className={style.calendar_container}>
      <div className={style.calendar_header + ' ' + headerClassName}>
        {header}
      </div>
      <div className={style.calendar_content__wrapper}>
        <div className={style.calendar_content}>{children}</div>
      </div>
    </div>
  );
}

import { PropsWithChildren } from 'react';
import style from './error-fallback.module.css';

type PropsType = PropsWithChildren<{}>;

export function ErrorFallback(props: PropsType): JSX.Element {
  const { children } = props;

  return (
    <section className={style.window}>
      <h4 className={style.window_header}>System message</h4>
      <div className={style.window_content}>
        <div className={style.cross}>
          <svg viewBox="0 0 100 100" width="26" height="26">
            <rect x="46" y="0" width="8" height="100" fill="currentColor" />
            <rect x="0" y="46" width="100" height="8" fill="currentColor" />
          </svg>
        </div>
        <div className={style.message}>{children}</div>
      </div>
    </section>
  );
}

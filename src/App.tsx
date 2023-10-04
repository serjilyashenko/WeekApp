import { DateToWeek } from './views/date-to-week/DateToWeek';
import { WeekToDate } from './views/week-to-date/WeekToDate';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import { ErrorFallback } from './components/error-fallback/ErrorFallback';
import { GithubLink } from './components/github-link/GithubLink';
import style from './app.module.css';

export default function App(): JSX.Element {
  return (
    <div className={style.app_wrapper}>
      <div className={style.content_wrapper}>
        <header className={style.header}>
          <h1>🗓️ Week App</h1>
        </header>
        <main className={style.main_content}>
          <div className={style.main_content__item}>
            <DateToWeek />
          </div>
          <div className={style.main_content__item}>
            <ErrorBoundary
              fallback={(error: Error) => (
                <ErrorFallback>{error.message}</ErrorFallback>
              )}
            >
              <WeekToDate />
            </ErrorBoundary>
          </div>
        </main>
      </div>
      <footer className={style.footer}>
        <GithubLink />
      </footer>
    </div>
  );
}

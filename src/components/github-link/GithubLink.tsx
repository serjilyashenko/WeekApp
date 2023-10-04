import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import style from './github-link.module.css';

export function GithubLink(): JSX.Element {
  return (
    <a
      href="https://github.com/serjilyashenko/WeekApp"
      target="_blank"
      rel="noreferrer"
      aria-label="github link"
    >
      <GitHubIcon className={style.logo} />
    </a>
  );
}

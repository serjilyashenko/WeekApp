import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import style from './github-link.module.css';

export function GithubLink(): JSX.Element {
  return (
    <a
      className={style.link}
      href="https://github.com/serjilyashenko/WeekApp"
      target="_blank"
      rel="noreferrer"
      aria-label="github link"
    >
      <GitHubIcon aria-label="github icon" className={style.logo} />
    </a>
  );
}

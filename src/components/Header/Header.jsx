import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HeaderLink from "./HeaderLink";
import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>Marlene.</h1>
      </div>
      <nav>
        <ul>
          <HeaderLink path="/" name="Home" />
          <HeaderLink path="/about" name="About" />
          <HeaderLink path="/portfolio" name="Portfolio" />
          <HeaderLink path="/contact" name="Contact" />
        </ul>
      </nav>
      <div className={classes.gitHubLink}>
        <a href="https://github.com/i-Lene/curriculum" target="_blank">
          {<FontAwesomeIcon icon={faGithub} />}
        </a>
      </div>
    </header>
  );
}

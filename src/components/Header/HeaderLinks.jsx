import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HeaderLink from "./HeaderLink";
import classes from "./Header.module.scss";

function HeaderLinks() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <HeaderLink path="/" name="Home" />
        <HeaderLink path="/about" name="About" />
        <HeaderLink path="/portfolio" name="Portfolio" />
        <HeaderLink path="/contact" name="Contact" />
      </ul>
      <div className={classes.gitHubLink}>
        <a href="https://github.com/i-Lene" target="_blank">
          {<FontAwesomeIcon icon={faGithub} />}
        </a>
      </div>
    </nav>
  );
}

export default HeaderLinks;

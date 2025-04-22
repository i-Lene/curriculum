import HeaderLink from "./HeaderLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Marlene.</h1>
      </div>
      <nav>
        <ul>
          <HeaderLink
            path="/"
            name="Home"
          />
          <HeaderLink
            path="/about"
            name="About"
          />
          <HeaderLink
            path="/portfolio"
            name="Portfolio"
          />
          <HeaderLink
            path="/contact"
            name="Contact"
          />
        </ul>
      </nav>
    </header>
  );
}

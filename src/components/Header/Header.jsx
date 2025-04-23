import classes from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { Link } from "react-router";

export default function Header() {
  const burgerDropdownRef = useRef(null);

  function toggleBurgerMenu() {
    if (burgerDropdownRef.current) {
      burgerDropdownRef.current.classList.toggle(classes.active);
    }
  }

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to={"/"}>
        <h1>Marlene.</h1>
      </Link>
      <div className={classes.headerLinksDesktop}>
        <HeaderLinks />
      </div>
      <div className={classes.headerLinksMobile}>
        <div className={classes.burger}>
          <button className={classes.burgerIcon} onClick={toggleBurgerMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={classes.burgerDropdown} ref={burgerDropdownRef}>
            <HeaderLinks />
          </div>
        </div>
      </div>
    </header>
  );
}

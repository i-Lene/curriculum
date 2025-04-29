import classes from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownAnimationClose = { opacity: 0, y: -20 };
  const dropDownAnimationOpen = { opacity: 1, y: 25 };

  function toggleBurgerMenu() {
    setIsDropdownOpen((prev) => !prev);
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

          <motion.div
            className={classes.burgerDropdown}
            initial={dropDownAnimationClose}
            animate={
              isDropdownOpen ? dropDownAnimationOpen : dropDownAnimationClose
            }
            transition={{ duration: 0.3 }}
          >
            <HeaderLinks />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
